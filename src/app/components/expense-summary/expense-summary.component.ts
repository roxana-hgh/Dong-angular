import { Component, OnInit } from '@angular/core';
import { GroupExpenseService } from '../../services/group-expense.service';
import { GroupMember } from '../../interfaces/GroupMember';
import { Expense } from '../../interfaces/Expense';
import { Settlement } from '../../interfaces/settlement';

interface ExpenseDetail {
  expenseName: string;
  paidBy: string;
  totalAmount: number;
  contribution: number;
  isPayee: boolean;
}

interface MemberSummary {
  name: string;
  totalOwed: number;        // What they owe in total
  totalPaid: number;        // What they paid in total
  netBalance: number;       // Positive means they're owed money, negative means they owe
  details: ExpenseDetail[];
}

@Component({
  selector: 'app-expense-summary',
  templateUrl: './expense-summary.component.html',
  styleUrls: ['./expense-summary.component.scss']
})
export class ExpenseSummaryComponent implements OnInit {
  members: GroupMember[] = [];
  expenses: Expense[] = [];
  memberSummaries: MemberSummary[] = [];
  settlements: Settlement[] = [];
  
  // Track expanded/collapsed state for each member's details
  expandedMembers: { [name: string]: boolean } = {};

  constructor(private groupExpenseService: GroupExpenseService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.members = this.groupExpenseService.getMembers();
    this.expenses = this.groupExpenseService.getExpenses();
    this.calculateSummary();
    this.calculateSettlements();
    
    // Initialize expansion state for each member (all collapsed by default)
    this.members.forEach(member => {
      this.expandedMembers[member.name] = false;
    });
  }

  calculateSummary(): void {
    const breakdown = this.groupExpenseService.getDetailedBreakdown();
    
    // Convert the breakdown object to our MemberSummary array format
    this.memberSummaries = this.members.map(member => {
      const memberData = breakdown[member.name];
      
      return {
        name: member.name,
        totalOwed: memberData.owed,
        totalPaid: memberData.paid,
        netBalance: memberData.net,
        details: memberData.details.map(detail => ({
          expenseName: detail.expenseName,
          paidBy: detail.paidBy,
          totalAmount: detail.totalAmount,
          contribution: detail.shareAmount,
          isPayee: detail.isPayee
        }))
      };
    });
  }

  calculateSettlements(): void {
    this.settlements = this.groupExpenseService.calculateSettlements();
  }

  toggleMemberDetails(memberName: string): void {
    this.expandedMembers[memberName] = !this.expandedMembers[memberName];
  }

  isMemberExpanded(memberName: string): boolean {
    return this.expandedMembers[memberName];
  }

  // Helper method to format currency
  formatCurrency(amount: number): string {
    return amount.toFixed(2);
  }
  
  // Get the text color class based on balance
  getBalanceColorClass(balance: number): string {
    if (balance > 0) return 'positive-balance'; // Gets money
    if (balance < 0) return 'negative-balance'; // Owes money
    return '';
  }
  
  // Check if a member is involved in any settlements
  isInvolved(memberName: string): boolean {
    return this.settlements.some(s => 
      s.from === memberName || s.to === memberName
    );
  }
  
  // Get settlements where the member is the payer
  getPayments(memberName: string): Settlement[] {
    return this.settlements.filter(s => s.from === memberName);
  }
  
  // Get settlements where the member is the receiver
  getReceivables(memberName: string): Settlement[] {
    return this.settlements.filter(s => s.to === memberName);
  }
  
  // Returns the total amount a member has to pay to others
  getTotalPayments(memberName: string): number {
    return this.getPayments(memberName)
      .reduce((sum, settlement) => sum + settlement.amount, 0);
  }
  
  // Returns the total amount a member will receive from others
  getTotalReceivables(memberName: string): number {
    return this.getReceivables(memberName)
      .reduce((sum, settlement) => sum + settlement.amount, 0);
  }
  
  // Generate a simple text summary for sharing
  generateSummaryText(): string {
    let text = 'Expense Summary\n\n';
    
    // Add overall totals
    const totalExpense = this.expenses.reduce((sum, exp) => sum + exp.amount, 0);
    text += `Total Expenses: $${totalExpense.toFixed(2)}\n\n`;
    
    // Add settlements
    text += 'Settlements:\n';
    if (this.settlements.length === 0) {
      text += 'Everyone is settled up!\n';
    } else {
      this.settlements.forEach(settlement => {
        text += `${settlement.from} pays ${settlement.to}: $${settlement.amount.toFixed(2)}\n`;
      });
    }
    
    text += '\nIndividual Summaries:\n';
    this.memberSummaries.forEach(member => {
      text += `${member.name}: `;
      if (member.netBalance > 0) {
        text += `gets back $${member.netBalance.toFixed(2)}`;
      } else if (member.netBalance < 0) {
        text += `owes $${Math.abs(member.netBalance).toFixed(2)}`;
      } else {
        text += `all settled`;
      }
      text += ` (paid $${member.totalPaid.toFixed(2)}, share $${member.totalOwed.toFixed(2)})\n`;
    });
    
    return text;
  }
  
  // Share summary (copy to clipboard)
  shareSummary(): void {
    const summaryText = this.generateSummaryText();
    navigator.clipboard.writeText(summaryText)
      .then(() => {
        alert('Summary copied to clipboard!');
      })
      .catch(err => {
        console.error('Could not copy text: ', err);
        alert('Failed to copy summary. Please try again.');
      });
  }
}