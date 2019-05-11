import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {AuthService } from '../../services/auth.service'
import { FormGroup, FormControl, Validators, ValidatorFn, FormBuilder, EmailValidator, FormArray, AbstractControl } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  // server: any= "http://192.168.2.151:8087/samplingkit/rest/SponsorUser/getAllSponsorUsers";
  // addData: any = "http://192.168.2.151:8087/samplingkit/rest/SponsorUser/createUser";
  // delete: any = "http://192.168.2.151:8087/samplingkit/rest/SponsorUser/deleteSponsorUser"
  data: Object;
  profileForm: FormGroup;
  pid: number
  pfname: string;
  plname: string;
  pemail: string;
  prole:any;

  pmobileno:string;
  puserName:string;
  upassWord:string;
  updata: any;
  updatfrm: boolean = false;
  addfrm: boolean= false;
  sponserUsers:any;
  psponsorId: any;
  

  constructor(private http:HttpClient, private fb:FormBuilder,
     private auth: AuthService, private dataservice:DataService) { 
 

   
  }

  ngOnInit() {
       this.getUser();
      this.profileForm=this.fb.group({
        'firstName':[null,Validators.required],
        'lastName':[null,Validators.required],
        'emailId':[null,Validators.required],
        'role':[null,Validators.required],
        'mobileNum':[null,Validators.required],
        'userName':[null,Validators.required],
        'sponsorId':[null],
        'passWord':[null,Validators.required],
        
         })
  }
  
 getUser() {
  
    this.dataservice.getUsersData().subscribe(data => {
      this.data = data.resultData;
    })
  }
  addUsers(profileForm){
    profileForm.reset();
    this.updatfrm = false;
    this.addfrm= true;
  }

  save(formData:any){
    debugger;
      this.dataservice.postUsers(formData).subscribe(data=>{
        console.log("adding data",data)
        this.getUser();
      })
  }
  changeUser(){
    this.dataservice.getSponserUser().subscribe(data => {
      this.sponserUsers = data
    })
  }
  editForm(data){
    console.log("hfdhf",data)
    this.updatfrm= true;
    this.addfrm= false;
    this.profileForm.patchValue({
      'mobileNum':data.mobileNum,
      'role':data.roles[0],
      'emailId':data.emailId,
      'sponsorId':data.sponsorId,
      'firstName':data.firstName,
      'lastName':data.lastName,
      'userName':data.username,
      'password':data.password
     
      })
  }
  /*
  editForm(data) {
    console.log("updating", data)
    this.addfrm = false;
    this.updatfrm = true;

    this.updata = data;
    this.pid = this.updata.id;
    this.pfname = this.updata.firstName;
    this.plname = this.updata.lastName;
    this.pemail = this.updata.emailId;
    this.prole = this.updata.role[0];
    this.pmobileno = this.updata.mobileNum;
    this.puserName = this.updata.userName;
    this.psponsorId=this.updata.sponsorId;

  }
*/

  deleteData(id) {
    this.dataservice.deleteUsers(id).subscribe(data => {
      console.log("deleting data",data)
      this.getUser();
    })
  }

  updateValue(data) {
    var dt = { 
      id: this.pid, 
      firstName: this.pfname,
       lastName: this.plname, 
       emailId: this.pemail,
       mobileNum: this.pmobileno,
       userName: this.puserName,
       sponsorId: this.psponsorId
       }
   this.dataservice.updateUsers(dt).subscribe(data => {
     console.log("updated",data);
      this.getUser();
      // this.addfrm = true
      // this.updatfrm = false;
      // this.pid = null;
      // this.pfname = "";
      // this.plname = "";
      // this.pemail = ""
    })
  }
  
}
