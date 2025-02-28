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
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { TranslatePipe } from './shared/pipes/Translate.pipe';
import { TranslationService } from './services/translation.service';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GroupSetupComponent,
    ExpenseEntryComponent,
    ExpenseSummaryComponent,
    BaseComponent,
    HeaderComponent,
    TranslatePipe,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    MatButtonModule, 
    MatMenuModule

  ],
  providers: [
    TranslationService,
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
