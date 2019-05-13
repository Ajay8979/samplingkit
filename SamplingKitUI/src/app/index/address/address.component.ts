import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from './../services/index.service';
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";

declare var $: any;


@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  users:FormGroup;

  constructor(private router:Router,private fb:FormBuilder,private sends:IndexService) { }

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
  address : ['',Validators.required],
  country : ['',Validators.required],
  postcode : ['',Validators.required]
  });

  }

  datesends(formdata)
  {
    let requestobj={};
    requestobj=this.sends.seconddata;
    requestobj['firstName']=this.users.value.firstName;
    requestobj['lastName']=this.users.value.lastName;
    requestobj['address']=this.users.value.address;
    this.sends.seconddata=requestobj;
    this.router.navigate(['result']);
  }

  first()
  {
    this.router.navigate(['moredetail'])
  }



}
