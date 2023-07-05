import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './auth/login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import {AuthGuardService} from "./guards/auth-guard.service";
import { SidebarComponent } from './dashboard/sidebar/sidebar.component';
import { MilkProductionComponent } from './modules/milk-production/milk-production.component';
import { HerdManagementComponent } from './modules/herd-management/herd-management.component';
import { HealthRecordsComponent } from './modules/health-records/health-records.component';
import { BreedingComponent } from './modules/breeding/breeding.component';
import { SalesRecordComponent } from './modules/sales-record/sales-record.component';
import { ExpensesComponent } from './modules/expenses/expenses.component';
import { FinancialReportComponent } from './modules/reports/financial-report/financial-report.component';
import { MilkReportComponent } from './modules/reports/milk-report/milk-report.component';
import { HerdReportComponent } from './modules/reports/herd-report/herd-report.component';
import { HealthReportComponent } from './modules/reports/health-report/health-report.component';
import { BreedingReportComponent } from './modules/reports/breeding-report/breeding-report.component';
import { UserProfileComponent } from './auth/user-profile/user-profile.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    MilkProductionComponent,
    HerdManagementComponent,
    HealthRecordsComponent,
    BreedingComponent,
    SalesRecordComponent,
    ExpensesComponent,
    FinancialReportComponent,
    MilkReportComponent,
    HerdReportComponent,
    HealthReportComponent,
    BreedingReportComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
