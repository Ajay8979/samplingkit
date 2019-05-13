import { IndexService } from './../services/index.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {Validators, FormBuilder,FormGroup} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {

  person:FormGroup;
  submitted = false;
  ethnic={};
  some={};
  ethenicData: any;
  requestobj: any=[];
  obj1: {};
 

  constructor(private router:Router,private fb:FormBuilder,private sendservice:IndexService,private http:HttpClient) { 
    this.getEthenicDetails();
  }

  ngOnInit() {

    this.person= this.fb.group({

      gender: ['',Validators.required],
      oppositeGender: ['',Validators.required],
    

    });

    
   }


  LoginAction(formdata)
  {
    this.submitted=true;
    // this.sendservice.pass(formdata);
    this.sendservice.persondata=formdata;
    let requestobj=formdata;
    requestobj.age=this.sendservice.logindata['age'];
    requestobj.postCode=this.sendservice.logindata['postCode'];
    this.sendservice.sendone(requestobj);
  }
  
  createGenderEthenic(gender,oppositeGender,selectedEthenicName)
  {
    var id=selectedEthenicName.id;
   // this.sendservice.ethnicGroupId=id;
   sessionStorage.setItem('ethenicGroupId',id);
    var obj={gender:gender,oppositeGender:oppositeGender,ethnicGroupId:id}
   
    this.sendservice.persondata=obj;
    this.requestobj=obj;
    
    this.requestobj.age=this.sendservice.logindata['age'];
    this.requestobj.postCode=this.sendservice.logindata['postCode'];
    this.sendservice.sendone(this.requestobj);
     
    

  }

  send()
  {
    this.router.navigate(['login']);
  }

 getEthenicDetails(){
   
   this.sendservice.getethnic().subscribe(data=>{
     this.ethenicData=data.resultData;
   })
 }
}
