import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.scss']
})
export class UserdetailsComponent implements OnInit {
  userDetails: any;
  username: any;
  firsname: any;
  lastname: any;
  phone: any;
  email: any;

  constructor(private dataservice:DataService) {
    this.getuserByid();
   }
getuserByid(){
this.dataservice.getuserByid(sessionStorage.getItem('sponsorId')).subscribe(data=>{
  //this.userDetails=data.resultData;
  this.username=data.resultData[0];
  this.firsname=data.resultData[1];
  this.lastname=data.resultData[2];
  this.phone=data.resultData[3];
  this.email=data.resultData[0];
 
})
}
  ngOnInit() {
  }

}
