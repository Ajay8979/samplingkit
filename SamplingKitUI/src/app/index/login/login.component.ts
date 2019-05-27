import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from "@angular/core";
import {Validators, FormBuilder,FormGroup} from "@angular/forms";
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
  values:any;
  elgible:boolean=true;
  age:any;
  ethenicData: any;
  requestobj: any=[];
  ethnic={};
  some={};
  obj1: {};
  gender:any;
  oppositeGender:any;
  go:any;
  storage:any;
  agedata:any;
  test:boolean=false;
  

  constructor(private fb:FormBuilder,private authService:AuthService,private routerNavigate:Router,private sendservice:IndexService,private activatedRoute:ActivatedRoute) {}
  
  
  LoginTemplate()
  {
    this.agepostCodeFlag=false;
    this.loginTemplate=true;
  }
  homePage()
  {
    this.agepostCodeFlag=true;
    this.loginTemplate=false;
  }


  LoginAction(formData:any)
  {
    if(this.authService.loginAction(formData)){
     this.routerNavigate.navigate(['dashboard']);
    }
  }
  
  ngOnInit()
  {
    
    $(document).ready(function () {

    $('.login-content [data-toggle="flip"]').click(function() {
    $('.login-box').toggleClass('flipped');
    return false;
    });

    // this.storage=localStorage.getItem("primaryuser");
     //this.age=JSON.parse(this.storage);
     

  });


  this.OBSLoginForm = this.fb.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required]
  });

  
  /*this.agedata=JSON.parse(localStorage.getItem('primaryuser'));
  this.age=this.agedata.age;*/
  

  }


  send(formData)
  {
     //this.sendservice.send(this.user.value);
     let key=formData.age;
     sessionStorage.setItem('age',key);
     this.sendservice.logindata=this.user.value;
     
    
     //this.routerNavigate.navigate(['personsdetails'])
  }
 
  pass(age:any)
  {
    if(age>18)
    {
    this.routerNavigate.navigate(['/personsdetails']);
    this.sendservice.logindata=age;
    localStorage.setItem('primaryuser',age)
    }
    else
    {
      this.routerNavigate.navigate(['ageerror']);
    }
  }
  

  viewResult()
  {
    this.routerNavigate.navigate(['viewresults']);
  }

  LoginPage()
  {
    this.routerNavigate.navigate(['loginpageaction']);
  }



 
 }
