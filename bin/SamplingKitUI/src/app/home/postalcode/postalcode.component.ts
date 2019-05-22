import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'
@Component({
  selector: 'app-postalcode',
  templateUrl: './postalcode.component.html',
  styleUrls: ['./postalcode.component.scss']
})
export class PostalcodeComponent implements OnInit {
  [x: string]: any;

  postalCodeForm:FormGroup;
  updatfrm : boolean= false;
  addfrm: boolean= true;
  data: NgForm;
  id: any;
  postalCodes: any;
  mpincode: any;
  postalCode: any;
  postalcode: any;
  postalObj:any={};
  pId:any;

  constructor(private dataservice:DataService,private fb:FormBuilder) { 
    // this.getEventById(this.id);
  }

  ngOnInit() {
    this.postalCodeForm=this.fb.group({
     // 'postalCode':[null,Validators.compose([Validators.required,Validators.pattern('^(([gG][iI][rR] {0,}0[aA]{2})|(([aA][sS][cC][nN]|[sS][tT][hH][lL]|[tT][dD][cC][uU]|[bB][bB][nN][dD]|[bB][iI][qQ][qQ]|[fF][iI][qQ][qQ]|[pP][cC][rR][nN]|[sS][iI][qQ][qQ]|[iT][kK][cC][aA]) {0,}1[zZ]{2})|((([a-pr-uwyzA-PR-UWYZ][a-hk-yxA-HK-XY]?[0-9][0-9]?)|(([a-pr-uwyzA-PR-UWYZ][0-9][a-hjkstuwA-HJKSTUW])|([a-pr-uwyzA-PR-UWYZ][a-hk-yA-HK-Y][0-9][abehmnprv-yABEHMNPRV-Y]))) {0,}[0-9][abd-hjlnp-uw-zABD-HJLNP-UW-Z]{2}))$')])],
      postalCode:['',Validators.compose([Validators.required,Validators.maxLength(4)])]
    })
    this.getPostalcode()
  }
  add(regForm){
  
    this.updatfrm= false;
    this.addfrm= true;

  }
  // Save 
  addPostalCode(formData:any){
    this.dataservice.postPostalcode(formData).subscribe((res)=>{

      this.getPostalcode();
    })
       }

  //Update Special Event
  updatePostalData(formData:any){
    formData.id=this.pId;
    this.dataservice.updatePostalcode(formData).subscribe((res)=>{
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
    this.pId=data.id;
    this.postalCodeForm.setValue({
      'postalCode':data.postalCode,
    })
    this.updatfrm= true;
    this.addfrm= false;
    
   }

   //Delete Special event

   deletePostalCode(id){
    this.dataservice.deletePostalcode(id).subscribe((res)=>{
      console.log("deleted status",res);
      this.getPostalcode();
    })
  }
 

}

