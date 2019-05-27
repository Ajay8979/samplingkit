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
  sponsorId: any;
  commissionerspentdata: any;
  constructor(private DataService: DataService) {
    this.role = sessionStorage.getItem('userRole');
    this.getDashData();
    this.getSpendListforSponsor();
  }
  getDashData() {
    //if(this.role="SPONSORUSER"){
    //}
    this.sponsorId = sessionStorage.getItem('sponsorId')
    this.DataService.getDashboardData(this.sponsorId).subscribe(response => {
      this.dashData = response.resultData;
    })

  }
  getSpendListforSponsor() {
    this.sponsorId = sessionStorage.getItem('sponsorId');
    this.DataService.getsponsorDashboardspentList(this.sponsorId).subscribe(res=>{
      this.commissionerspentdata=res.resultData;
    })
  }
  ngOnInit() {
  }
}
