import { FinalComponent } from './final/final.component';
import { MoreDetailComponent } from './more-detail/more-detail.component';
import { QuestionsComponent } from './questions/questions.component';
import { AddressComponent } from './address/address.component';
import { TestComponent } from './test/test.component';
import { ForgotComponent } from './forgot/forgot.component';
import { LoginComponent } from './login/login.component';
import { Routes } from '@angular/router';
import { SignUpComponent } from './sign-up/sign-up.component';
import { IndexComponent } from './index.component';
import { LoginGuard } from '../gaurds/login.guard';
import { ResultComponent } from './result/result.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';





export const Indexroutes: Routes = 
[
    {path:'',component:IndexComponent,canActivate:[LoginGuard],
    children:[
    {path:'login',component:LoginComponent},
    {path:'sing-up',component:SignUpComponent},
    {path:'forgot',component:ForgotComponent},
    {path:'personsdetails',component:PersonDetailsComponent},
    {path:'test',component:TestComponent},
    {path:'address',component:AddressComponent},
    {path:'question',component:QuestionsComponent},
    {path:'moredetail',component:MoreDetailComponent},
    {path:'result',component:ResultComponent},
    {path:'edit',component:EditDetailsComponent},
    {path:'final',component:FinalComponent}

    ]
   }
]