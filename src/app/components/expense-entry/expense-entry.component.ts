import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { GroupMember } from '../../interfaces/GroupMember';
import { Expense } from '../../interfaces/Expense';
import { GroupExpenseService } from '../../services/group-expense.service';


@Component({
    selector: 'app-expense-entry',
    templateUrl: './expense-entry.component.html',
    styleUrls: ['./expense-entry.component.scss'],
    standalone: false
})
export class ExpenseEntryComponent implements OnInit {
  expenseForm: FormGroup;
  groupMembers: GroupMember[] = [];
  expenses: Expense[] = [];
   activeStep: number = 2;
displaylist = false;
  items = [
    {
      label: 'Group',
      routerLink: '/group',
    },
    {
      label: 'Expenses',
      routerLink: '/summary',
    },
    {
      label: 'Summary',
      routerLink: '/expenses',
    },
  ];

  constructor(private fb: FormBuilder, private groupExpenseService: GroupExpenseService) {
    this.expenseForm = this.fb.group({
      expenseName: ['', Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
      paidBy: ['', Validators.required],
      splitBetween: this.fb.array([], Validators.required)
    });
  }

  ngOnInit(): void {
    this.groupMembers = this.groupExpenseService.getMembers();
    this.expenses = this.groupExpenseService.getExpenses();

    if (this.groupMembers.length) {
      this.expenseForm.patchValue({ paidBy: this.groupMembers[0].name });
    }
  }

  get splitBetween(): FormArray {
    return this.expenseForm.get('splitBetween') as FormArray;
  }

  onCheckboxChange(memberName: string, event: any): void {
    const splitBetweenArray = this.expenseForm.get('splitBetween') as FormArray;
    if (event.checked) {
      splitBetweenArray.push(this.fb.control(memberName));
    } else {
      const index = splitBetweenArray.controls.findIndex(x => x.value === memberName);
      if (index !== -1) {
        splitBetweenArray.removeAt(index);
      }
    }
  }

  addExpense(): void {
    if (this.expenseForm.invalid) {
      alert('Please fill in all fields and select at least one member for splitting.');
      return;
    }
    const formValue = this.expenseForm.value;
    const expense: Expense = {
      expenseName: formValue.expenseName,
      amount: formValue.amount,
      paidBy: formValue.paidBy,
      splitBetween: formValue.splitBetween
    };

    this.groupExpenseService.addExpense(expense);
    this.expenses = this.groupExpenseService.getExpenses();
    this.splitBetween.clear();
    this.expenseForm.reset();

    if (this.groupMembers.length) {
      this.expenseForm.patchValue({ paidBy: this.groupMembers[0].name });
    }
  }

  removeExpense(index: number): void {
    this.groupExpenseService.removeExpense(index);
    this.expenses = this.groupExpenseService.getExpenses();
  }
}
