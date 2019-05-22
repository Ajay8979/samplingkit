import { CheckpostalComponent } from './checkpostal/checkpostal.component';
import { RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PostcodeerrorComponent } from './postcodeerror/postcodeerror.component';
import { FinalComponent } from './final/final.component';
import { MoreDetailComponent } from './more-detail/more-detail.component';
import { QuestionsComponent } from './questions/questions.component';
import { AddressComponent } from './address/address.component';
import { TestComponent } from './test/test.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IndexComponent } from './index.component';
import { LoginGuard } from '../gaurds/login.guard';
import { ResultComponent } from './result/result.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { ViewresultsComponent } from './viewresults/viewresults.component';
import { AgeerrorComponent } from './ageerror/ageerror.component';
import { LoginActionPageComponent } from './login-action-page/login-action-page.component';




export const Indexroutes: Routes = 
[
    {path:'',component:IndexComponent,canActivate:[LoginGuard],
    children:[
    {path:'login',component:LoginComponent},
    {path:'login/:id',component:LoginComponent},
    {path:'sing-up',component:SignUpComponent},
    {path:'personsdetails',component:PersonDetailsComponent},
    {path:'personsdetails/:id',component:PersonDetailsComponent},
    {path:'test',component:TestComponent},
    {path:'address',component:AddressComponent},
    {path:'address/:id',component:AddressComponent},
    {path:'result/:id',component:ResultComponent},
    {path:'question',component:QuestionsComponent},
    {path:'checkpostal',component:CheckpostalComponent},
    {path:'moredetail',component:MoreDetailComponent},
    {path:'result',component:ResultComponent},
    {path:'edit',component:EditDetailsComponent},
    {path:'final',component:FinalComponent},
    {path:'not',component:PostcodeerrorComponent},
    {path:'pagenotfound',component:PagenotfoundComponent},
    {path:'final',component:FinalComponent},
    {path:'viewresults',component:ViewresultsComponent},
    {path:'loginpageaction',component:LoginActionPageComponent},
    {path:'ageerror',component:AgeerrorComponent}
    ]
    }
]