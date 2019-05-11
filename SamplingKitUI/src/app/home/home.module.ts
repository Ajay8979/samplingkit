import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReportComponent } from './report/report.component';
import { HelpComponent } from './help/help.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { SponsorUserComponent } from './sponsor-user/sponsor-user.component';
import { HttpClientModule } from '@angular/common/http';
import { EthenicgroupComponent } from './ethenicgroup/ethenicgroup.component';
@NgModule({
  declarations: [DashboardComponent, ReportComponent, HelpComponent, UsersComponent, SponsorUserComponent, EthenicgroupComponent],
  imports: [
    CommonModule, ReactiveFormsModule, ReactiveFormsModule, FormsModule, HttpClientModule
  ]
})
export class HomeModule { }
