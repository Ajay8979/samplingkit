import { HelpComponent } from './help/help.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home.component';
import { Routes } from '@angular/router';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from '../gaurds/auth.guard';
import { UsersComponent } from './users/users.component';
import { SponsorUserComponent } from './sponsor-user/sponsor-user.component';
import { EthenicgroupComponent } from './ethenicgroup/ethenicgroup.component';


export const HomeRoutes: Routes = [
    {path:'',component:HomeComponent,canActivate:[AuthGuard],
    children:[
    {path:'',component:DashboardComponent},
    {path:'dashboard',component:DashboardComponent},
    // {path:'report',component:ReportComponent},
    {path:'users',component:UsersComponent},
    {path:'sponsorUser',component:SponsorUserComponent},
    {path:'ethenicgroup',component:EthenicgroupComponent}
    ]
   }]
