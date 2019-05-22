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
import { StatusComponent } from './status/status.component';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SponsordetailsComponent } from './sponsordetails/sponsordetails.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import { TestcodeComponent } from './testcode/testcode.component';
import { PostalcodeComponent } from './postalcode/postalcode.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [DashboardComponent, ReportComponent, HelpComponent, UsersComponent, SponsorUserComponent, EthenicgroupComponent,StatusComponent,SpecialeventComponent, UserdetailsComponent, SponsordetailsComponent, ServicerequestComponent, TestcodeComponent, PostalcodeComponent],
  imports: [
    CommonModule, ReactiveFormsModule, FormsModule, HttpClientModule,Ng2SearchPipeModule,NgMultiSelectDropDownModule.forRoot(),NgxPaginationModule
  ]
})
export class HomeModule { }
