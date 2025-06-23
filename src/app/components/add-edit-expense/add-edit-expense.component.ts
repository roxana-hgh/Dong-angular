import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Expense } from '../../interfaces/Expense';
import { GroupMember } from '../../interfaces/GroupMember';
import { GroupExpenseService } from '../../service/group-expense.service';
import { SHARED_IMPORTS } from '../../shared/shared-imports';

@Component({
  selector: 'app-add-edit-expense',
  imports: [SHARED_IMPORTS, ReactiveFormsModule],
  templateUrl: './add-edit-expense.component.html',
  styleUrl: './add-edit-expense.component.scss'
})
export class AddEditExpenseComponent {
 expenseForm!: FormGroup;
  groupMembers: GroupMember[] = [];
  expenses: Expense[] = [];
  currentId!: number;
  currentExpense!: Expense;
  private lastExpenseId: number = 0;
  
  constructor(
    private fb: FormBuilder, 
    private groupExpenseService: GroupExpenseService, 
    private router: Router,
    private route: ActivatedRoute ) 
    {
   
  }

  ngOnInit(): void {
    this.groupMembers = this.groupExpenseService.getMembers();
    this.expenses = this.groupExpenseService.getExpenses();
    // Set the lastExpenseId to the highest existing ID
    this.lastExpenseId = this.calculateLastExpenseId();

    if (this.groupMembers.length && this.expenseForm) {
      this.expenseForm?.patchValue({ paidBy: this.groupMembers[0].name });
    }

    this.currentId = this.captureIdFromURL()
    if(this.currentId){
      const expense = this.groupExpenseService.getSingleExpense(this.currentId)
      if (expense) {
        this.currentExpense = expense;
        console.log(this.currentExpense);
        
        this.generateExpenseForm(this.currentExpense)
      } else {
        this.generateExpenseForm(null)
      }
    }else {
      this.generateExpenseForm(null)
    }
  }

    private captureIdFromURL() {
    return Number(this.route.snapshot.paramMap.get('id'));
  }

  generateExpenseForm(expense: Expense | null){
     this.expenseForm = new FormGroup({
      expenseName: new FormControl( expense? this.currentExpense.expenseName:  '', [Validators.required, Validators.pattern(/[\S]/g)]),
      amount: new FormControl(expense? this.currentExpense.amount: null, [Validators.required, Validators.min(1)]),
      paidBy: new FormControl(expense? this.currentExpense.paidBy:'', Validators.required),
      splitBetween: new FormArray(expense ? this.currentExpense.splitBetween.map(name => new FormControl(name)): [], Validators.required)
    });
  }


  private calculateLastExpenseId(): number {
    if (!this.expenses.length) return 0;
    return Math.max(...this.expenses.map(expense => expense.id));
  }

  private generateUniqueId(): number {
    this.lastExpenseId++;
    return this.lastExpenseId;
  }

  get splitBetween(): FormArray {
    return this.expenseForm.get('splitBetween') as FormArray;
  }

  onCheckboxChange(memberName: string, event: any): void {
    const splitBetweenArray = this.expenseForm.get('splitBetween') as FormArray;
    if (event.target.checked) {
      // Add member if checked and not already present
      if (!splitBetweenArray.controls.some(ctrl => ctrl.value === memberName)) {
        splitBetweenArray.push(this.fb.control(memberName));
      }
    } else {
      // Remove member if unchecked
      const index = splitBetweenArray.controls.findIndex(ctrl => ctrl.value === memberName);
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
      id: this.currentExpense? this.currentExpense.id : this.generateUniqueId(),
      expenseName: formValue.expenseName,
      amount: formValue.amount,
      paidBy: formValue.paidBy,
      splitBetween: formValue.splitBetween
    };

    if(this.currentExpense){
      this.groupExpenseService.editExpense(this.currentId,expense)
    }else {
      this.groupExpenseService.addExpense(expense);
    }

    
    this.expenses = this.groupExpenseService.getExpenses();
    this.expenseForm.reset();
    
    if (this.groupMembers.length && this.expenseForm) {
      this.expenseForm?.patchValue({ paidBy: this.groupMembers[0].name });
    }
    this.router.navigate(['/group-dashboard']);
  }



}
