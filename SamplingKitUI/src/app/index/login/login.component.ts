import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";
import { Router } from '@angular/router';
import { IndexService } from './../services/index.service';

declare var $: any;


@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {

  OBSLoginForm:FormGroup;
  user:FormGroup;

  constructor(private fb:FormBuilder,private authService:AuthService,private routerNavigate:Router,private sendservice:IndexService) {}

  LoginAction(formData:any){
    if(this.authService.loginAction(formData)){
     this.routerNavigate.navigate(['dashboard']);
   }
  
  }

  ngOnInit() {

    $(document).ready(function () {
      $('.login-content [data-toggle="flip"]').click(function() {
      	$('.login-box').toggleClass('flipped');
      	return false;
      });
      });


    this.OBSLoginForm = this.fb.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required]
    });

    this.OBSLoginForm = this.fb.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required]
    });

    //age validation
    this.user = this.fb.group({
    age: ['',Validators.required],
    postCode: ['',Validators.required]
    });


  }


  send()
  {
     this.sendservice.send(this.user.value)
     this.sendservice.logindata=this.user.value;
  }
  
   

 
 }
