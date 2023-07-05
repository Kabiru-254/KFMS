import {Component, NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard/dashboard.component";
import { LoginComponent } from "./auth/login/login.component";
import { AuthGuardService } from "./guards/auth-guard.service";
import {MilkProductionComponent} from "./modules/milk-production/milk-production.component";
import {HerdManagementComponent} from "./modules/herd-management/herd-management.component";
import {HealthRecordsComponent} from "./modules/health-records/health-records.component";
import {BreedingComponent} from "./modules/breeding/breeding.component";
import {SalesRecordComponent} from "./modules/sales-record/sales-record.component";
import {ExpensesComponent} from "./modules/expenses/expenses.component";
import {FinancialReportComponent} from "./modules/reports/financial-report/financial-report.component";
import {MilkReportComponent} from "./modules/reports/milk-report/milk-report.component";
import {HerdReportComponent} from "./modules/reports/herd-report/herd-report.component";
import {HealthReportComponent} from "./modules/reports/health-report/health-report.component";
import {BreedingReportComponent} from "./modules/reports/breeding-report/breeding-report.component";
import {UserProfileComponent} from "./auth/user-profile/user-profile.component";

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService] },
  { path: 'login', component: LoginComponent},
  { path: 'milk-production', component: MilkProductionComponent},
  { path: 'herd-management', component: HerdManagementComponent},
  { path: 'health-records', component: HealthRecordsComponent},
  { path: 'breeding', component: BreedingComponent},
  { path: 'sales-records', component: SalesRecordComponent},
  { path: 'expenses', component: ExpensesComponent},
  { path: 'view-profile', component: UserProfileComponent},
  { path: 'reports',
    children: [
      // { path: '', component: ReportsComponent },
      { path: 'financial-report', component: FinancialReportComponent },
      { path: 'milk-report', component: MilkReportComponent },
      { path: 'herd-report', component: HerdReportComponent },
      { path: 'health-report', component: HealthReportComponent },
      { path: 'breeding-report', component: BreedingReportComponent }
    ]
  },
  { path: '**', redirectTo: 'dashboard' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
