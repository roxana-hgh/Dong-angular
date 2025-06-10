import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupExpenseService } from '../../services/group-expense.service';
import { Expense } from '../../interfaces/Expense';
import { Popover } from 'primeng/popover';

@Component({
  selector: 'app-group-dashboard',
  standalone: false,
  templateUrl: './group-dashboard.component.html',
  styleUrl: './group-dashboard.component.scss',
})
export class GroupDashboardComponent implements OnInit {
  groupMembers: string[] = [];
  expenses: Expense[] = [];
  groupName: string = '';
  constructor(private groupExpenseService: GroupExpenseService) {}
  @ViewChild('op') op!: Popover;
  selectedExpenseIndex: number | null = null;

  ngOnInit() {
    this.groupMembers = this.groupExpenseService
      .getMembers()
      .map((member) => member.name);

    this.groupName = this.groupExpenseService.getGroupDetails().name;

    this.expenses = this.groupExpenseService.getExpenses();
  }

  toggle(event: any, item: number): void {
    if (this.selectedExpenseIndex) {
      this.op.hide();
      this.selectedExpenseIndex = null;
    } else {
      this.selectedExpenseIndex = item;
      this.op.show(event);

      if (this.op.container) {
        this.op.align();
      }
    }
  }

  removeExpense(): void {
    if (this.selectedExpenseIndex === null) {
      return;
    }
    const index = this.selectedExpenseIndex;
    this.groupExpenseService.removeExpense(index);
    this.expenses = this.groupExpenseService.getExpenses();
  }
}
