import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servicerequest',
  templateUrl: './servicerequest.component.html',
  styleUrls: ['./servicerequest.component.scss']
})
export class ServicerequestComponent implements OnInit {
  sponsorIdData: any=[];
  address: any;
  notificationEmail: any;
  notificationPhone: any;


  constructor(private dataservice:DataService) {
      this.getServiceRequestDetails();
   }
   getNotificationDetails(data){
     this.address=data.address;
     this.notificationEmail=data.notificationEmail;
     this.notificationPhone=data.notificationPhone;
   }

   getServiceRequestDetails(){
    this.dataservice.getServiceRequestDetails(sessionStorage.getItem('sponsorId')).subscribe(response=>{
     this.sponsorIdData=response.resultData;
    })
  }

   ngOnInit() {
  }
  
}
