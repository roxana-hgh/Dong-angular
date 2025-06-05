import { Component, OnInit } from '@angular/core';
import { GroupExpenseService } from '../../services/group-expense.service';
import { Expense } from '../../interfaces/Expense';

@Component({
  selector: 'app-group-dashboard',
  standalone: false,
  templateUrl: './group-dashboard.component.html',
  styleUrl: './group-dashboard.component.scss'
})
export class GroupDashboardComponent implements OnInit {
groupMembers: string[] = [];
  expenses: Expense[] = [];
constructor(private groupExpenseService: GroupExpenseService) {}


  ngOnInit() {
    this.groupMembers = this.groupExpenseService
      .getMembers()
      .map((member) => member.name);

      this.expenses = this.groupExpenseService.getExpenses();
  }

}
