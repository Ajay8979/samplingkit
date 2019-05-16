import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
// import { Routes } from '@angular/router';
import { Routes, RouterModule } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { UsersComponent } from './users/users.component';
import { SponsorUserComponent } from './sponsor-user/sponsor-user.component';
import { EthenicgroupComponent } from './ethenicgroup/ethenicgroup.component';
import { StatusComponent } from './status/status.component';
import { SpecialeventComponent } from './specialevent/specialevent.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { SponsordetailsComponent } from './sponsordetails/sponsordetails.component';
import { ServicerequestComponent } from './servicerequest/servicerequest.component';
import { TestcodeComponent } from './testcode/testcode.component';
import { PostalcodeComponent } from './postalcode/postalcode.component';
export const HomeRoutes: Routes = [
    {path:'',component:HomeComponent,canActivate:[AuthGuard],
    children:[
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},
    {path:'users',component:UsersComponent},
    {path:'sponsorUser',component:SponsorUserComponent},
    {path:'ethenicgroup',component:EthenicgroupComponent},
	{path:'status',component:StatusComponent},
    {path:'specialevent',component:SpecialeventComponent},
    {path:'userdetail',component:UserdetailsComponent},
    {path:'sponsordetail',component:SponsordetailsComponent},
    {path:'servicerequest',component:ServicerequestComponent},
    {path:'testcode',component:TestcodeComponent},
    {path:'postalcode',component:PostalcodeComponent}
    
    ]
   }]
