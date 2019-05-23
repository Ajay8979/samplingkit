import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { TestComponent } from './test/test.component';
import { AddressComponent } from './address/address.component';
import { QuestionsComponent } from './questions/questions.component';
import { MoreDetailComponent } from './more-detail/more-detail.component';
import { ResultComponent } from './result/result.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { FinalComponent } from './final/final.component';
import { PostcodeerrorComponent } from './postcodeerror/postcodeerror.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ViewresultsComponent } from './viewresults/viewresults.component';
import { LoginActionPageComponent } from './login-action-page/login-action-page.component';
import { CheckpostalComponent } from './checkpostal/checkpostal.component';
import { AgeerrorComponent } from './ageerror/ageerror.component';
import { InternalerrorComponent } from './internalerror/internalerror.component';




@NgModule({

  declarations: [LoginComponent,LoginActionPageComponent,ViewresultsComponent, SignUpComponent, PersonDetailsComponent, TestComponent, AddressComponent, QuestionsComponent, MoreDetailComponent, ResultComponent, EditDetailsComponent, FinalComponent, PostcodeerrorComponent, PagenotfoundComponent, CheckpostalComponent,CheckpostalComponent, AgeerrorComponent, InternalerrorComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule
  ]
})
export class IndexModule { }
