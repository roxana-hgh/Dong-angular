import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Expense } from '../../interfaces/Expense';
import { GroupExpenseService } from '../../service/group-expense.service';
import { SHARED_IMPORTS } from '../../shared/shared-imports';
import { Popover, PopoverModule } from 'primeng/popover';

@Component({
  selector: 'app-group-dashboard',
  imports: [SHARED_IMPORTS, PopoverModule],
  templateUrl: './group-dashboard.component.html',
  styleUrl: './group-dashboard.component.scss'
})
export class GroupDashboardComponent {
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
