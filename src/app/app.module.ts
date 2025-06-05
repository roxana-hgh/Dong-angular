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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DrawerModule } from 'primeng/drawer';
import { SelectButton } from 'primeng/selectbutton';
import { RadioButtonModule } from 'primeng/radiobutton';

import { RouterModule } from '@angular/router';
import { TranslatePipe } from './shared/pipes/Translate.pipe';
import { TranslationService } from './services/translation.service';
import {
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';

import { providePrimeNG } from 'primeng/config';
import { CheckboxModule } from 'primeng/checkbox';
import { BadgeModule } from 'primeng/badge';
import { ButtonModule } from 'primeng/button';
import MyPreset from '../mypreset';
import { AddEditGroupComponent } from './components/add-edit-group/add-edit-group.component';
import { GroupDashboardComponent } from './components/group-dashboard/group-dashboard.component';

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
    AddEditGroupComponent,
    GroupDashboardComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    DrawerModule,
    RadioButtonModule,
    CheckboxModule,
    ButtonModule,
    SelectButton,
    BadgeModule
  ],
  providers: [
    TranslationService,
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: MyPreset,
         options: {
            darkModeSelector: '.my-app-dark',
            cssLayer: {
                name: 'primeng',
                order: 'tailwind-base, primeng, tailwind-utilities'
            }
        }
      },
    }),
    provideHttpClient(withInterceptorsFromDi()),
  ],
})
export class AppModule {}
