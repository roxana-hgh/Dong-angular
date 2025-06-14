import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GroupSetupComponent } from './components/group-setup/group-setup.component';
import { ExpenseEntryComponent } from './components/expense-entry/expense-entry.component';
import { ExpenseSummaryComponent } from './components/expense-summary/expense-summary.component';
import { BaseComponent } from './components/base/base.component';
import { AddEditGroupComponent } from './components/add-edit-group/add-edit-group.component';
import { GroupDashboardComponent } from './components/group-dashboard/group-dashboard.component';

const routes: Routes = [
  { path: '', component: BaseComponent, children: [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: HomeComponent },
    {path: 'new-group', component: AddEditGroupComponent},
    { path: 'group-member', component: GroupSetupComponent },
    { path: 'group-dashboard', component: GroupDashboardComponent },
    { path: 'expenses', component: ExpenseEntryComponent },
    {path: 'edit-expense/:id',component: ExpenseEntryComponent},
    { path: 'summary', component: ExpenseSummaryComponent },
  ] 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
