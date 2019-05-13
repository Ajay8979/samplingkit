import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IndexService } from './../services/index.service';

@Component({
  selector: 'app-edit-details',
  templateUrl: './edit-details.component.html',
  styleUrls: ['./edit-details.component.scss']
})
export class EditDetailsComponent implements OnInit {
  firstname: any;
  requestobj: any;
  email: any;
  address: any;
  mobile: any;
  gender: any;
  dob: any;
  resultobj: {};


  constructor(private router:Router,private sends:IndexService) { }

  ngOnInit() 
  {
    
  //  this.router.navigate(['result']);
    this.requestobj={};
    this.resultobj=this.sends.seconddata;
    this.firstname=this.sends.seconddata['firstName'];
    this.gender=this.sends.seconddata['gender'];
    this.dob=this.sends.seconddata['dob'];
    this.address=this.sends.seconddata['address'];
    this.mobile=this.sends.seconddata['mobile'];
    this.email=this.sends.seconddata['email'];
    
  }


  send()
  {
    this.sends.another(this.resultobj);
  }


}
