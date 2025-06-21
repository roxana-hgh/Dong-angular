import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupExpenseService } from '../../services/group-expense.service';
import { GroupMember } from '../../interfaces/GroupMember';
import { Expense } from '../../interfaces/Expense';
import { MemberSummary, Settlement } from '../../interfaces/Settlement';
import { Popover } from 'primeng/popover';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-expense-summary',
  templateUrl: './expense-summary.component.html',
  styleUrls: ['./expense-summary.component.scss'],
  standalone: false,
})
export class ExpenseSummaryComponent implements OnInit {
  members: GroupMember[] = [];
  expenses: Expense[] = [];
  memberSummaries: MemberSummary[] = [];
  settlements: Settlement[] = [];
  groupName: string = '';
  totalExpensesAmout: number = 0;

  // Track expanded/collapsed state for each member's details
  expandedMembers: { [name: string]: boolean } = {};

   @ViewChild('op') op!: Popover;

  constructor(private groupExpenseService: GroupExpenseService, private translate: TranslationService) {}

  calculationTypeOptions: any[] = [
    { label: this.translate.getTranslation('direct_payment_logic'), value: 'direct' },
    { label: this.translate.getTranslation('minified_transactions'), value: 'minified' },
  ];

  calculationType: string = 'direct';

  ngOnInit(): void {
    this.loadData();
    this.translate.getTranslations().subscribe(translations => {
    if (Object.keys(translations).length > 0) {
      this.calculationTypeOptions = [
        { label: this.translate.getTranslation('direct_payment_logic'), value: 'direct' },
        { label: this.translate.getTranslation('minified_transactions'), value: 'minified' },
      ];
    }
  });
  }

 toggle(event: any) {
        this.op.toggle(event);
    }

  loadData(): void {
    this.members = this.groupExpenseService.getMembers();
    this.expenses = this.groupExpenseService.getExpenses();
    this.groupName = this.groupExpenseService.getGroupDetails().name;
    this.calculateSummary();
    this.calculateSettlements(this.calculationType);
    this.calculateTotalAmount();

    // Initialize expansion state for each member (all collapsed by default)
    this.members.forEach((member) => {
      this.expandedMembers[member.name] = false;
    });
  }

  calculateTotalAmount() {
    this.expenses.forEach((item) => {
      this.totalExpensesAmout += item.amount;
    });
  }

  CalctypeChange() {
    this.calculateSettlements(this.calculationType);
  }

  calculateSummary(): void {
    const breakdown = this.groupExpenseService.getDetailedBreakdown();

    // Convert the breakdown object to our MemberSummary array format
    this.memberSummaries = this.members.map((member) => {
      const memberData = breakdown[member.name];

      return {
        name: member.name,
        totalOwed: memberData.owed,
        totalPaid: memberData.paid,
        netBalance: memberData.net,
        details: memberData.details.map((detail) => ({
          expenseName: detail.expenseName,
          paidBy: detail.paidBy,
          totalAmount: detail.totalAmount,
          contribution: detail.shareAmount,
          isPayee: detail.isPayee,
        })),
      };
    });
  }

  calculateSettlements(Type: string): void {
    if (this.calculationType === 'direct') {
      this.settlements = this.groupExpenseService.calculateDirectSettlements();
    } else if (this.calculationType === 'minified') {
      this.settlements =
        this.groupExpenseService.calculateMinimizedSettlements();
    }
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
    return this.settlements.some(
      (s) => s.from === memberName || s.to === memberName
    );
  }

  // Get settlements where the member is the payer
  getPayments(memberName: string): Settlement[] {
    return this.settlements.filter((s) => s.from === memberName);
  }

  // Get settlements where the member is the receiver
  getReceivables(memberName: string): Settlement[] {
    return this.settlements.filter((s) => s.to === memberName);
  }

  // Returns the total amount a member has to pay to others
  getTotalPayments(memberName: string): number {
    return this.getPayments(memberName).reduce(
      (sum, settlement) => sum + settlement.amount,
      0
    );
  }

  // Returns the total amount a member will receive from others
  getTotalReceivables(memberName: string): number {
    return this.getReceivables(memberName).reduce(
      (sum, settlement) => sum + settlement.amount,
      0
    );
  }

  // Generate a simple text summary for sharing
  generateSummaryText(): string {
    let text = 'Expense Summary\n\n';

    // Add overall totals
    const totalExpense = this.expenses.reduce(
      (sum, exp) => sum + exp.amount,
      0
    );
    text += `Total Expenses: $${totalExpense.toFixed(2)}\n\n`;

    // Add settlements
    text += 'Settlements:\n';
    if (this.settlements.length === 0) {
      text += 'Everyone is settled up!\n';
    } else {
      this.settlements.forEach((settlement) => {
        text += `${settlement.from} pays ${
          settlement.to
        }: $${settlement.amount.toFixed(2)}\n`;
      });
    }

    text += '\nIndividual Summaries:\n';
    this.memberSummaries.forEach((member) => {
      text += `${member.name}: `;
      if (member.netBalance > 0) {
        text += `gets back $${member.netBalance.toFixed(2)}`;
      } else if (member.netBalance < 0) {
        text += `owes $${Math.abs(member.netBalance).toFixed(2)}`;
      } else {
        text += `all settled`;
      }
      text += ` (paid $${member.totalPaid.toFixed(
        2
      )}, share $${member.totalOwed.toFixed(2)})\n`;
    });

    return text;
  }

  // Share summary (copy to clipboard)
  shareSummary(): void {
    const summaryText = this.generateSummaryText();
    navigator.clipboard
      .writeText(summaryText)
      .then(() => {
        alert('Summary copied to clipboard!');
      })
      .catch((err) => {
        console.error('Could not copy text: ', err);
        alert('Failed to copy summary. Please try again.');
      });
  }
}
