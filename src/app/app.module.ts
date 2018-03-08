import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule, routingComponents } from './app.routers';
import { HttpModule } from '@angular/http';
import {ErrorStateMatcher,ShowOnDirtyErrorStateMatcher} from '@angular/material/core';

import { AppComponent } from './app.component';
import { GeneralNavComponent } from './general-nav/general-nav.component';
import { DoctorNavComponent } from './doctor-nav/doctor-nav.component';
import { CollectorNavComponent } from './collector-nav/collector-nav.component';
import { LoginComponent } from './login/login.component';
import { CollectorDashboardComponent } from './collector-dashboard/collector-dashboard.component';
import { DoctorDashboardComponent } from './doctor-dashboard/doctor-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { HomeComponent } from './home/home.component';
import { HttpService } from './services/http'
import { AdminService } from './services/admin.service';
import { EmployeeService } from './services/employee.service'
import { AdminNavComponent } from './admin-nav/admin-nav.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { AddCollectorComponent } from './add-collector/add-collector.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { CollectorListComponent } from './collector-list/collector-list.component';
import { AddReportComponent } from './add-report/add-report.component';
import { ReportListComponent } from './report-list/report-list.component';
import { AdminDrListComponent } from './admin-dr-list/admin-dr-list.component';
import { AdminCollectorListComponent } from './admin-collector-list/admin-collector-list.component';
import { AdminReportListComponent } from './admin-report-list/admin-report-list.component';
import { EmpDetailDialogComponent } from './emp-detail-dialog/emp-detail-dialog.component';
import { ClReportListComponent } from './cl-report-list/cl-report-list.component';
import { ReportDetailDialogComponent } from './report-detail-dialog/report-detail-dialog.component'


@NgModule({
  declarations: [
    AppComponent,
    GeneralNavComponent,
    DoctorNavComponent,
    CollectorNavComponent,
    LoginComponent,
    CollectorDashboardComponent,
    DoctorDashboardComponent,
    AdminDashboardComponent,
    AdminLoginComponent,
    HomeComponent,
    AdminNavComponent,
    AddDoctorComponent,
    AddCollectorComponent,
    DoctorListComponent,
    CollectorListComponent,
    AddReportComponent,
    ReportListComponent,
    AdminDrListComponent,
    AdminCollectorListComponent,
    AdminReportListComponent,
    EmpDetailDialogComponent,
    ClReportListComponent,
    ReportDetailDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpModule,
  ],
  entryComponents:[
    EmpDetailDialogComponent,
    ReportDetailDialogComponent
  ],
  providers: [HttpService,AdminService,EmployeeService,{provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher}],
  bootstrap: [AppComponent]
})
export class AppModule { }
