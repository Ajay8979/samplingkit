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

  this.users = this.fb.group({
  firstName: ['',Validators.required],
  lastName : ['',Validators.required],
 
  });

 
  this.OBSLoginForm = this.fb.group({
    'username': [null,Validators.required],
    'password': [null,Validators.required]
  });


  let params:any = this.activatedRoute.snapshot.params; 

  if(params.id==1)
  {
      let someobj=this.sends.seconddata;
      this.users.controls.firstName.setValue(someobj['firstName']);
      this.detail="submit";
  } 
  else
  {
      let someobj=this.sends.seconddata;
      this.users.controls.firstName.setValue(someobj['firstName']);
      this.users.controls.lastName.setValue(someobj['lastName']);
  } 
  
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
    requestobj['firstName']=this.users.value.firstName;
    requestobj['lastName']=this.users.value.lastName;
    requestobj['address']=this.users.value.address;
    this.sends.seconddata=requestobj;
    this.router.navigate(['result']);

    if(this.detail=="submit")
    {
      this.router.navigate(['edit']);
    }
    else
    {
    this.router.navigate(['result']);
    } 
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

  viewResult()
  {
    this.router.navigate(['viewresults']);
  }
  LoginPage()
  {
    this.router.navigate(['loginpageaction']);
  }

  



}
