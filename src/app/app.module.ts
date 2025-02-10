import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { GroupSetupComponent } from './components/group-setup/group-setup.component';
import { ExpenseEntryComponent } from './components/expense-entry/expense-entry.component';
import { ExpenseSummaryComponent } from './components/expense-summary/expense-summary.component';
import { BaseComponent } from './components/base/base.component';
import { HeaderComponent } from './components/header/header.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupSetupComponent,
    ExpenseEntryComponent,
    ExpenseSummaryComponent,
    BaseComponent,
    HeaderComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
