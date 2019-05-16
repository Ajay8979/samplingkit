import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from './../services/index.service';
import { AuthService } from './../../services/auth.service';
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {

  firstname: any;
  requestobj: any;
  email: any;
  address: any;
  mobile: any;
  gender: any;
  dob: any;
  resultobj: {};
  OBSLoginForm:FormGroup;
  id:number=1;
  value:number=2;

  constructor(private router:Router,private sends:IndexService,private authService:AuthService,private fb:FormBuilder) { }

  ngOnInit() 
  {
    
  //  this.router.navigate(['result']);
    this.requestobj={};
    this.resultobj=this.sends.seconddata;
    this.firstname=this.sends.seconddata['firstName'];
    this.gender=this.sends.seconddata['gender'];
    this.dob=this.sends.seconddata['dob'];
    this.address=this.sends.seconddata['address'];
    this.mobile=this.sends.seconddata['mobile'];
    this.email=this.sends.seconddata['email'];
    

    this.OBSLoginForm = this.fb.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required]
    });
    
  }

  LoginAction(formData:any)
  {
    if(this.authService.loginAction(formData)){
     this.router.navigate(['dashboard']);
    }
  }

  send()
  {
    this.sends.another(this.resultobj);
  }

  viewResult(){
    this.router.navigate(['viewresults']);
  }
  LoginPage(){
    this.router.navigate(['loginpageaction']);
  }


}
