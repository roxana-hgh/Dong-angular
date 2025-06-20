import { Component, OnInit, ViewChild } from '@angular/core';
import { GroupExpenseService } from '../../services/group-expense.service';
import { Expense } from '../../interfaces/Expense';
import { Popover } from 'primeng/popover';
import { Router } from '@angular/router';
import { MemberSummary } from '../../interfaces/Settlement';

@Component({
  selector: 'app-group-dashboard',
  standalone: false,
  templateUrl: './group-dashboard.component.html',
  styleUrl: './group-dashboard.component.scss',
})
export class GroupDashboardComponent implements OnInit {
  groupMembers: string[] = [];
  expenses: Expense[] = [];
  groupdetail: { name: string; description?: string } = {name: ''};
  totalExpensesAmout: number = 0
  selectedExpenseId: number | null = null;
  constructor(private groupExpenseService: GroupExpenseService, private router: Router) {}
  @ViewChild('op') op!: Popover;

  ngOnInit() {
    this.groupMembers = this.groupExpenseService
      .getMembers()
      .map((member) => member.name);

    this.groupdetail = this.groupExpenseService.getGroupDetails();

    this.expenses = this.groupExpenseService.getExpenses();
    this.calculateTotalAmount()
  }

  
  calculateTotalAmount(){
    this.expenses.forEach(item => {
      this.totalExpensesAmout += item.amount
    })
  }

  toggle(event: any, id: number): void {
    if (this.selectedExpenseId) {
      this.op.hide();
      this.selectedExpenseId = null;
    } else {
      this.selectedExpenseId = id;
      this.op.show(event);

      if (this.op.container) {
        this.op.align();
      }
    }
  }

  openEditExpense(){
    if (this.selectedExpenseId === null) {
      return;
    }
    const expenseId = this.selectedExpenseId;
    this.router.navigate(['edit-expense', expenseId])
    
  }

  removeExpense(): void {
    if (this.selectedExpenseId === null) {
      return;
    }
    const expenseId = this.selectedExpenseId;
    this.groupExpenseService.removeExpense(expenseId);
    this.expenses = this.groupExpenseService.getExpenses();
  }
}
