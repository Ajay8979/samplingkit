import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  OBSLoginForm:FormGroup;
  id:number=1;

  constructor(private router:Router,private authService:AuthService,private fb:FormBuilder) { }

  ngOnInit() 
  {
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


  first()
  {
    this.router.navigate(['personsdetails']);
  }

  second()
  {
    this.router.navigate(['checkpostal']);
  }


  viewResult()
  {
    this.router.navigate(['viewresults']);
  }
  LoginPage()
  {
    this.router.navigate(['loginpageaction']);
  }


}
