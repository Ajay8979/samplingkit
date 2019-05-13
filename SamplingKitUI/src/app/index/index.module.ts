import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { TestComponent } from './test/test.component';
import { AddressComponent } from './address/address.component';
import { QuestionsComponent } from './questions/questions.component';
import { MoreDetailComponent } from './more-detail/more-detail.component';
import { ResultComponent } from './result/result.component';
import { EditDetailsComponent } from './edit-details/edit-details.component';
import { FinalComponent } from './final/final.component';

@NgModule({
  declarations: [LoginComponent, SignUpComponent, ForgotComponent, PersonDetailsComponent, TestComponent, AddressComponent, QuestionsComponent, MoreDetailComponent, ResultComponent, EditDetailsComponent, FinalComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class IndexModule { }
