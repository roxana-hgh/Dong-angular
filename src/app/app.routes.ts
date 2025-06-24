import { Routes } from '@angular/router';
import { BaseComponent } from './components/layout/base/base.component';

// import { HomeComponent } from './components/home/home.component';
// import { AddEditGroupComponent } from './components/add-edit-group/add-edit-group.component';
// import { GroupSetupComponent } from './components/group-setup/group-setup.component';
// import { GroupDashboardComponent } from './components/group-dashboard/group-dashboard.component';
// import { AddEditExpenseComponent } from './components/add-edit-expense/add-edit-expense.component';
// import { ExpenseSummeryComponent } from './components/expense-summery/expense-summery.component';




export const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    children: [
      { path: '', redirectTo: 'start', pathMatch: 'full' },
      {
        path: 'start',
        loadComponent: () =>
          import('./components/home/home.component').then(m => m.HomeComponent),
      },
      {
        path: 'new-group',
        loadComponent: () =>
          import('./components/add-edit-group/add-edit-group.component').then(m => m.AddEditGroupComponent),
      },
      {
        path: 'group-member',
        loadComponent: () =>
          import('./components/group-setup/group-setup.component').then(m => m.GroupSetupComponent),
      },
      {
        path: 'group-dashboard',
        loadComponent: () =>
          import('./components/group-dashboard/group-dashboard.component').then(m => m.GroupDashboardComponent),
      },
      {
        path: 'expenses',
        loadComponent: () =>
          import('./components/add-edit-expense/add-edit-expense.component').then(m => m.AddEditExpenseComponent),
      },
      {
        path: 'edit-expense/:id',
        loadComponent: () =>
          import('./components/add-edit-expense/add-edit-expense.component').then(m => m.AddEditExpenseComponent),
      },
      {
        path: 'summary',
        loadComponent: () =>
          import('./components/expense-summery/expense-summery.component').then(m => m.ExpenseSummeryComponent),
      },
    ],
  },
];


// export const routes: Routes = [
//   {
//     path: '',
//     component: BaseComponent,
//     children: [
//       { path: '', redirectTo: '/start', pathMatch: 'full' },
//       { path: 'start', component: HomeComponent },
//       { path: 'new-group', component: AddEditGroupComponent },
//       { path: 'group-member', component: GroupSetupComponent },
//       { path: 'group-dashboard', component: GroupDashboardComponent },
//       { path: 'expenses', component: AddEditExpenseComponent },
//       { path: 'edit-expense/:id', component: AddEditExpenseComponent },
//       { path: 'summary', component: ExpenseSummeryComponent },
//     ],
//   },
// ];
