import { Component, OnInit } from '@angular/core';
import { GroupExpenseService, GroupMember, Expense } from '../../services/group-expense.service';

interface ExpenseDetail {
  expenseName: string;
  contribution: number;
}

interface MemberSummary {
  name: string;
  total: number;
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

  constructor(private groupExpenseService: GroupExpenseService) {}

  ngOnInit(): void {
    this.members = this.groupExpenseService.getMembers();
    this.expenses = this.groupExpenseService.getExpenses();
    this.calculateSummary();
  }

  calculateSummary(): void {
    // Initialize each member summary with a total of 0 and an empty details array.
    this.memberSummaries = this.members.map(member => ({
      name: member.name,
      total: 0,
      details: []
    }));

    // For each expense, distribute the expense amount evenly among its participants.
    this.expenses.forEach(expense => {
      const numParticipants = expense.splitBetween.length;
      if (numParticipants > 0) {
        const shareAmount = expense.amount / numParticipants;
        expense.splitBetween.forEach(name => {
          const summary = this.memberSummaries.find(ms => ms.name === name);
          if (summary) {
            summary.total += shareAmount;
            summary.details.push({ expenseName: expense.expenseName, contribution: shareAmount });
          }
        });
      }
    });
  }
}
