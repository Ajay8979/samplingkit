import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  role: string;
  dashData: any;
  constructor(private DataService:DataService) {
   this.role=sessionStorage.getItem('userRole');
   this.getDashData();
  }
  getDashData(){
    //if(this.role="SPONSORUSER"){
    //}
    this.DataService.getDashboardData(sessionStorage.getItem('sponsorId')).subscribe(response=>{
      this.dashData=response.resultData;
    })
    
  }
  ngOnInit() {
   
  }
}
