import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from './../services/index.service';
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";

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

  constructor(private router:Router,private fb:FormBuilder,private sends:IndexService) { }

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
    this.router.navigate(['edit']);
  }


  first()
  {
    this.router.navigate(['address']);
  }

  
 

}
