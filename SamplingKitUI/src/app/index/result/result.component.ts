import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { IndexService } from './../services/index.service';
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";
import { AuthService } from './../../services/auth.service';

declare var $: any;

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  users:FormGroup;
  users1:FormGroup;
  users2:FormGroup;
  detail:string="next";
  value:number=2;
  
 OBSLoginForm:FormGroup;

  constructor(private router:Router,private fb:FormBuilder,private sends:IndexService,private authService:AuthService,private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    $(document).ready(function() {
        
      $('.text10').click(function(){
      $(".first_box").toggle();
      });  
      $('.text11').click(function(){
      $(".second_box").toggle();
      }); 
      $('.text12').click(function(){
      $(".third_box").toggle();
      }); 

    });


  this.users = this.fb.group({
     
      lastResortLetter: ['',Validators.required],
      notificationPhone: ['',Validators.required],
      notificationEmail: ['',Validators.required],
      mobile: ['',Validators.required],
      email: ['',Validators.required]

  });

  this.OBSLoginForm = this.fb.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required]
  });

  let params:any = this.activatedRoute.snapshot.params; 

   if(params.id==1)
   {
        let someobj=this.sends.seconddata;
        this.users.controls.mobile.setValue(someobj['mobile']);
        this.users.controls.email.setValue(someobj['email']);
        this.detail="submit";
   }
   else
   {
    this.users.controls.notificationPhone.setValue(this.sends.seconddata['notificationPhone']);
    this.users.controls.notificationEmail.setValue(this.sends.seconddata['notificationEmail']);
    this.users.controls.mobile.setValue(this.sends.seconddata['mobile']);
    this.users.controls.email.setValue(this.sends.seconddata['email']);
   } 

  }

  LoginAction(formData:any){
    if(this.authService.loginAction(formData)){
     this.router.navigate(['dashboard']);
   }
  
  }


  datesends(formdata)
  {
    
    let requestobj={};
    requestobj=this.sends.seconddata;
    requestobj['lastResortLetter']=this.users.value.lastResortLetter;
    requestobj['notificationPhone']=this.users.value.notificationPhone;
    requestobj['notificationEmail']=this.users.value.notificationEmail;
    requestobj['mobile']=this.users.value.mobile;
    requestobj['email']=this.users.value.email;
    this.sends.seconddata=requestobj;
    console.log(requestobj);
    
    if(this.detail=="submit")
    {
      this.router.navigate(['edit']);
    }
    else if(this.detail=="next")
    {
    this.router.navigate(['edit']);
    } 

  }


  first()
  {
    this.router.navigate(['address']);
  }

  
 

}
