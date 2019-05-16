import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-postalcode',
  templateUrl: './postalcode.component.html',
  styleUrls: ['./postalcode.component.scss']
})
export class PostalcodeComponent implements OnInit {

  updatfrm : boolean= false;
  addfrm: boolean= false;
  data: NgForm;
  id: any;
  postalCodes: any;
  mpincode: any;

  constructor(private dataservice:DataService) { 
    // this.getEventById(this.id);
  }

  ngOnInit() {
    this.getPostalcode()
  }
  add(regForm){
    regForm.reset();
    this.updatfrm= false;
    this.addfrm= true;
  }
  // Save Postal Code
  savePostaldata(regForm:NgForm){
    this.dataservice.postPostalcode(regForm).subscribe((res)=>{
      console.log("savind data is",res);
      this.getPostalcode();
    })
  }

  //Update Special Event
  updatePostalData(){
    var dt = { id:this.data['id'], postalCode: this.mpincode}
    this.dataservice.updatePostalcode(dt).subscribe((res)=>{
      console.log(res)
      this.getPostalcode();
    })
  }
// Get all Special Event
  getPostalcode(){
    this.dataservice.getAllPostalcode().subscribe((res)=>{
      console.log("getting data",res)
      this.postalCodes = res.resultData
    })
  }
  editPostal(data){
     this.updatfrm= true;
     this.addfrm= false;
     this.data =data
      this.mpincode = this.data['postalCode'];
    // this.id = this.data.id
   }

   //Delete Special event

   deletePostalCode(id){
    this.dataservice.deletePostalcode(id).subscribe((res)=>{
      console.log("deleted status",res);
      this.getPostalcode();
    })
  }
 

}

