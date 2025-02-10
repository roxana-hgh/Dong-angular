import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GroupSetupComponent } from './components/group-setup/group-setup.component';
import { ExpenseEntryComponent } from './components/expense-entry/expense-entry.component';
import { ExpenseSummaryComponent } from './components/expense-summary/expense-summary.component';
import { BaseComponent } from './components/base/base.component';

const routes: Routes = [
  { path: '', component: BaseComponent, children: [
    { path: '', redirectTo: '/start', pathMatch: 'full' },
    { path: 'start', component: HomeComponent },
    { path: 'group', component: GroupSetupComponent },
    { path: 'expenses', component: ExpenseEntryComponent },
    { path: 'summary', component: ExpenseSummaryComponent },
  ] 
},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
