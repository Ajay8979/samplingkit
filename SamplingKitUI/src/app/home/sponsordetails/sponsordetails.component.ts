import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sponsordetails',
  templateUrl: './sponsordetails.component.html',
  styleUrls: ['./sponsordetails.component.scss']
})
export class SponsordetailsComponent implements OnInit {
  [x: string]: any;
  sponsorDetails: any;
  streetNumber: any;
  streetName1: any;
  city: any;
  country: any;
  district: any;
  region: any;
  state: any;
  zipcode: any;
  streetName2: any;
  name: any;
  phone: any;
  budget: any;
  email: any;
  sponsorDetailsRule: any;
  postalCodesDetails: any;

  constructor(private dataservice:DataService) {
    this.getSponsorbyId();
   }

  getSponsorbyId(){
  this.dataservice.getSponsorbyId(sessionStorage.getItem('sponsorId')).subscribe(data=>{
    this.sponsorDetails=data.resultData;
    this.streetNumber=this.sponsorDetails.addresses[0].streetNumber;
    this.streetName1=this.sponsorDetails.addresses[0].streetName1;
    this.streetName2=this.sponsorDetails.addresses[0].streetName2;
    this.city=this.sponsorDetails.addresses[0].city;
    this.country=this.sponsorDetails.addresses[0].country;
    this.district=this.sponsorDetails.addresses[0].district;
    this.region=this.sponsorDetails.addresses[0].region;
    this.state=this.sponsorDetails.addresses[0].state;
    this.zipcode=this.sponsorDetails.addresses[0].zipcode;

    this.sponsorDetails=data.resultData.sponsor;
    this.name=this.sponsorDetails=data.resultData.sponsor.name;
    this.phone=this.sponsorDetails=data.resultData.sponsor.phone;
    this.email=this.sponsorDetails=data.resultData.sponsor.email;
    this.budget=this.sponsorDetails=data.resultData.sponsor.budget;
    
    this.sponsorDetailsRule=data.resultData.rules;
    this.postalCodesDetails=data.resultData.postalCodes;
    this.testcodeDetails=data.resultData.testCodes;
    

  })
  }
  ngOnInit() {
  }

}
