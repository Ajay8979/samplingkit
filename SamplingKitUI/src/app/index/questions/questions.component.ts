import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from './../services/index.service';

import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {

  user:FormGroup;

  constructor(private router:Router,private fb:FormBuilder,private sends:IndexService) { }

  ngOnInit() 
  {
      this.user = this.fb.group({
      dob: ['',Validators.required],
      hiv : ['',Validators.required],
      last : ['',Validators.required],
      partner : ['',Validators.required],
      under : ['',Validators.required]
      });
      
  }

  

  datesend(formdata)
  {
    let requestobj={};
    requestobj['age']=this.sends.logindata['age'];
    requestobj['postCode']=this.sends.logindata['postCode'];
    requestobj['dob']=this.user.value.dob;
    requestobj['quetionary1']={'"When did you last have an HIV test?"': this.user.value.dob},
    requestobj['quetionary2']={'"Have you had unprotected sex with in the last 12 months?"': this.user.value.hiv},
    requestobj['quetionary3']={'"How many partners have you had sex with in the last 12 moths?"': this.user.value.last},
    requestobj['quetionary4']={'"How oftner have you had sex under in influence of alchol or recreational drugs?"': this.user.value.partner}
    requestobj['gender']=this.sends.persondata['gender'];
    requestobj['oppositeGender']=this.sends.persondata['oppositeGender'];
    requestobj['ethnicGroup']=this.sends.persondata['ethnicGroup'];
    this.sends.seconddata=requestobj;
    console.log(requestobj)
    this.router.navigate(['moredetail']);
   
  }
 

  first()
  {
    this.router.navigate(['sample']);
  }

 
}
