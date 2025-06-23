import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { BaseComponent } from './components/layout/base/base.component';
import { AddEditGroupComponent } from './components/add-edit-group/add-edit-group.component';
import { GroupSetupComponent } from './components/group-setup/group-setup.component';
import { GroupDashboardComponent } from './components/group-dashboard/group-dashboard.component';
import { AddEditExpenseComponent } from './components/add-edit-expense/add-edit-expense.component';
import { ExpenseSummeryComponent } from './components/expense-summery/expense-summery.component';

export const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', redirectTo: '/start', pathMatch: 'full' },
      { path: 'start', component: HomeComponent },
      { path: 'new-group', component: AddEditGroupComponent },
      { path: 'group-member', component: GroupSetupComponent },
      { path: 'group-dashboard', component: GroupDashboardComponent },
      { path: 'expenses', component: AddEditExpenseComponent },
      { path: 'edit-expense/:id', component: AddEditExpenseComponent },
      { path: 'summary', component: ExpenseSummeryComponent },
    ],
  },
];
