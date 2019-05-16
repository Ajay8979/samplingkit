import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";
import { Router, ActivatedRoute } from '@angular/router';
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
  agepostCodeFlag:boolean=true;
  loginTemplate:boolean=false;

  constructor(private fb:FormBuilder,private authService:AuthService,private routerNavigate:Router,private sendservice:IndexService,private activatedRoute:ActivatedRoute) {}
  LoginTemplate(){
    this.agepostCodeFlag=false;
    this.loginTemplate=true;
  }
  homePage(){
    this.agepostCodeFlag=true;
    this.loginTemplate=false;
  }

  LoginAction(formData:any)
  {
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

     
    //age validation
    this.user = this.fb.group({
    age: ['',Validators.required],
    postCode: ['',Validators.required]
    });

    let params = this.activatedRoute.snapshot.params; 
    if(params.id==1)
    {
        let someobj=this.sendservice.seconddata;
        this.user.controls.age.setValue(this.sendservice.logindata['age']);
        this.user.controls.postCode.setValue(this.sendservice.logindata['postCode']);
    } 

  }


  send(formData)
  {
     this.sendservice.send(this.user.value);
     let key=formData.age;
     sessionStorage.setItem('age',key);
     this.sendservice.logindata=this.user.value;
     //this.routerNavigate.navigate(['personsdetails'])
  }
  
  viewResult(){
    this.routerNavigate.navigate(['viewresults']);
  }
  /*
  LoginPage(){
    this.routerNavigate.navigate(['loginpageaction']);
  }
*/
 
 }
