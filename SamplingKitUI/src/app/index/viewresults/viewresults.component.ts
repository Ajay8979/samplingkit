import { Component, OnInit } from '@angular/core';
import { IndexService } from './../services/index.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-viewresults',
  templateUrl: './viewresults.component.html',
  styleUrls: ['./viewresults.component.scss']
})
export class ViewresultsComponent implements OnInit {
  orderDetailsData: any=[];
  orderStatus: boolean=false;
  ordertrack: boolean=false;


  constructor(private indexservice:IndexService,private router:Router) { }

  viewOrderResult(orderId,accessKey){
   this.indexservice.getOrderDetails(orderId).subscribe(response=>{
     this.orderDetailsData=response.resultData;
     if(this.orderDetailsData==null){
      this.orderStatus=false;
      this.ordertrack=true;
    }
    else if( this.orderDetailsData[0].status=='In Progress'){
        this.orderStatus=true;
        this.ordertrack=false;
      }
     
   })
  }
  ngOnInit() {
  }

  
  viewResult()
  {
    this.router.navigate(['viewresults']);
  }
  LoginPage()
  {
    this.router.navigate(['loginpageaction']);
  }

}
