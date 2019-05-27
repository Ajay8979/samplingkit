import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from './../../services/auth.service';
import { Router } from '@angular/router';
import { IndexService } from '../services/index.service';



@Component({
  selector: 'app-login-action-page',
  templateUrl: './login-action-page.component.html',
  styleUrls: ['./login-action-page.component.scss']
})
export class LoginActionPageComponent implements OnInit {

  OBSLoginForm:FormGroup;
  loginActionActive=false;
  

  constructor(private fb:FormBuilder,private authService:AuthService,private routerNavigate:Router,private sendservice:IndexService) {}
  
  LoginAction(formData:any)
  {
    if(this.authService.loginAction(formData)){
      this.loginActionActive=true;
   }
  }

  navigateToDashboard(){
    if(this.loginActionActive){
      this.routerNavigate.navigate(['dashboard']);
    }
  }

  ngOnInit() 
  {
    this.OBSLoginForm = this.fb.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required]
    });

    this.authService.logindata.subscribe(data => {
      this.navigateToDashboard();
    });

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
