import { IndexService } from './../services/index.service';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {Validators, FormBuilder,FormGroup} from "@angular/forms";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.scss']
})
export class PersonDetailsComponent implements OnInit {
 
  OBSLoginForm:FormGroup;
  person:FormGroup;
  submitted = false;
  ethnic={};
  some={};
  ethenicData: any;
  requestobj: any=[];
  obj1: {};
  gender:any;
  persondeatails:any;
  oppositeGender:any;
  errorvalue:boolean=false;
  postalcode:any;

  id:number=1;
 
  constructor(private routerNavigate:Router,private fb:FormBuilder,private sendservice:IndexService,private http:HttpClient,private authService:AuthService,private activatedRoute: ActivatedRoute) 
  {
  this.getEthenicDetails();
  }



  ngOnInit()
  {
    this.OBSLoginForm = this.fb.group({
      'username': [null,Validators.required],
      'password': [null,Validators.required]
    });

  
   /*  this.persondeatails=JSON.parse(localStorage.getItem('primaryuser'));
    this.postalcode=this.persondeatails.postCode;
    this.gender=this.persondeatails.gender;
    this.oppositeGender=this.persondeatails.oppositeGender; */

   }


   LoginActions(formData:any)
   {
    if(this.authService.loginAction(formData)){
     this.routerNavigate.navigate(['dashboard']);
   }
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
  
  createGenderEthenic(gender,oppositeGender,selectedEthenicName,dates,postalcode)
  {
    var id=selectedEthenicName.id;
    // this.sendservice.ethnicGroupId=id;
    sessionStorage.setItem('ethenicGroupId',id);
    var obj={gender:gender,oppositeGender:oppositeGender,ethnicGroupId:id,postCode:postalcode}
    this.sendservice.persondata['selectedEthenicName']=selectedEthenicName;
    this.requestobj=obj;
    this.requestobj['age']=this.sendservice.logindata;
    this.sendservice.persondetails=this.requestobj;
    localStorage.setItem('primaryuser',JSON.stringify(this.requestobj));
    console.log( this.sendservice.persondetails);
    this.sendservice.sendone(this.requestobj);
    //this.routerNavigate.navigate(['test']);
    this.errorvalue=this.sendservice.testerror;
   }

  send()
  {
    this.routerNavigate.navigate(['login']);
  }

  getEthenicDetails()
  {
     this.sendservice.getethnic().subscribe(data=>{
     this.ethenicData=data.resultData;
     })
  }

  viewResult(){
    this.routerNavigate.navigate(['viewresults']);
  }
  LoginPage(){
    this.routerNavigate.navigate(['loginpageaction']);
  }




}
