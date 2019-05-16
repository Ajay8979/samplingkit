import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from './../services/index.service';
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";
import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-more-detail',
  templateUrl: './more-detail.component.html',
  styleUrls: ['./more-detail.component.scss']
})
export class MoreDetailComponent implements OnInit {

  users:FormGroup;
  OBSLoginForm:FormGroup;

  constructor(private router:Router,private fb:FormBuilder,private sends:IndexService,private authService:AuthService) { }

  ngOnInit() {

    this.users = this.fb.group({
      hiv: ['',Validators.required],
      protect : ['',Validators.required],
      protect2 : ['',Validators.required],
      protect3 : ['',Validators.required]
     
    });

    
    this.OBSLoginForm = this.fb.group({
   'username': [null,Validators.required],
   'password': [null,Validators.required]
    });

  }

  LoginAction(formData:any){
    if(this.authService.loginAction(formData)){
     this.router.navigate(['dashboard']);
   }
  
  }

  datessend(formdata)
  {
   
    let requestobj={};
    requestobj=this.sends.seconddata;
    requestobj['quetionary5']={'"When did you last ahve an HIV test?"': this.users.value.hiv};
    requestobj['quetionary6']={'"Have you had unprotected sex with in the last 12 months?"': this.users.value.protect};
    requestobj['quetionary7']={'"How many partners have you had sex with in the last 12 moths?"': this.users.value.protect2};
    requestobj['quetionary8']={'"How oftner have you had sex under in influence of alchol or recreational drugs?"': this.users.value.protect3};
    this.sends.seconddata=requestobj;
    this.router.navigate(['address']);
  }

  first()
  {
    this.router.navigate(['question']);
  }

  second()
  {
    this.router.navigate(['address']);
  }

  
  viewResult(){
    this.router.navigate(['viewresults']);
  }
  LoginPage(){
    this.router.navigate(['loginpageaction']);
  }

}
