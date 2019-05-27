import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { IndexService } from './../services/index.service';
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";
import { AuthService } from './../../services/auth.service';


declare var $: any;


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  users:FormGroup;
  addressDetails: any;
  OBSLoginForm:FormGroup;
  detail:string="next";
  contact=true;

  constructor(private router:Router,private fb:FormBuilder,private sends:IndexService,private authService:AuthService,private activatedRoute: ActivatedRoute) 
  { 
    
  }

  ngOnInit() 
  {

  $(document).ready(function() {
  $(".icon_3").click(function(){
  $(".inside_3").toggle();
  });
  });

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

  this.users = this.fb.group
  ({
  firstName: ['',Validators.required],
  lastName : ['',Validators.required],
  dob : ['',Validators.required],
  address :['',Validators.required],
  notificationPhone : ['',Validators.required],
  notificationEmail : ['',[Validators.required,Validators.email]],
  lastResortLetter : ['',Validators.required]
  });

 
  this.OBSLoginForm = this.fb.group({
    'username': [null,Validators.required],
    'password': [null,Validators.required]
  });

  

  let someobj=this.sends.seconddata;
  this.users.controls.firstName.setValue(someobj['firstName']);
  this.users.controls.lastName.setValue(someobj['lastName']);
  this.users.controls.dob.setValue(someobj['dob']);
  this.users.controls.notificationPhone.setValue(someobj['notificationPhone']);
  this.users.controls.notificationEmail.setValue(someobj['notificationEmail']);
  this.users.controls.lastResortLetter.setValue(someobj['lastResortLetter']);
  
  }


  LoginAction(formData:any)
  {
    if(this.authService.loginAction(formData)){
     this.router.navigate(['dashboard']);
  }
  }


  datesends(formdata)
  {
    this.contact=false;
    let requestobj={};
    requestobj=this.sends.seconddata;
    requestobj['dob']=this.users.value.dob;
    requestobj['firstName']=this.users.value.firstName;
    requestobj['lastName']=this.users.value.lastName;
    requestobj['address']=this.users.value.address;
    requestobj['notificationEmail']=this.users.value.notificationEmail;
    requestobj['notificationPhone']=this.users.value.notificationPhone;
    requestobj['lastResortLetter']=this.users.value.lastResortLetter;
    this.sends.seconddata=requestobj;
    localStorage.setItem('primaryuser',JSON.stringify(this.sends.seconddata));
    this.router.navigate(['edit']);
  }

  first()
  {
    this.router.navigate(['moredetail'])
  }

  getAddressDetails()
  {
    this.sends.lookup().subscribe(data=>{
    this.addressDetails=data.addresses;
    console.log(this.addressDetails)
  })
  }

  back()
  {
    this.router.navigate(['moredetail']);
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
