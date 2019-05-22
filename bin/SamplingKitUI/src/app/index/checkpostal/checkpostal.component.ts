import { Component, OnInit } from '@angular/core';
import { IndexService } from './../services/index.service';
import { Router } from '@angular/router';
import {Validators, FormBuilder,FormGroup,FormControl} from "@angular/forms";




@Component({
  selector: 'app-checkpostal',
  templateUrl: './checkpostal.component.html',
  styleUrls: ['./checkpostal.component.scss']
})
export class CheckpostalComponent implements OnInit {


  constructor(private router:Router,private sends:IndexService,private fb:FormBuilder) { }

  public firstcodeValue:any;
  firstcodelength:any;
  customForm:FormGroup;
  resultData:any;
  testName:any;
  getdata:Array<any>=[];


  ngOnInit() 
  {

     this.customForm = this.fb.group({
      'firstcode': ['',Validators.required],
     });
  
     this.firstcodelength=this.sends.testcodes.resultData['testCodes'];

     if(this.firstcodelength.length==1)
     {
       let some={};
       some['id']=this.firstcodelength[0].id;
       some['testName']=this.firstcodelength[0].testName;
       this.getdata.push(some);
     }

  }



  onCheckChange(testvalue)
  {
    for(let count=0;count<this.firstcodelength.length;count++){
      if(this.firstcodelength[count].id==testvalue.id){
        this.firstcodelength[count]['defaultTest']=!testvalue['defaultTest'];
      }
    }
    //console.log(this.firstcodelength);
  }


  show(formdata)
  {
      this.getdata=[];
      console.log(formdata.value)
      for(let count=0;count<this.firstcodelength.length;count++)
      {
        if(this.firstcodelength[count].defaultTest==true)
        {
          let obj={'id':this.firstcodelength[count]['id'],'testName':this.firstcodelength[count]['testName']};
          this.getdata.push(obj);
          console.log(this.firstcodelength[count]['id']);
        }
      }
      let requestobj={};
      requestobj=this.sends.persondetails;
      requestobj['testCodes']=this.getdata;
      this.sends.seconddata=requestobj;
      localStorage.setItem('primaryuser',JSON.stringify(requestobj));
      //this.sends.checkpostal=requestobj;
      console.log(this.sends.seconddata);
      this.router.navigate(['moredetail']);
  }

  next()
  {
      this.router.navigate(['moredetail'])
  }
  back()
  {
    this.router.navigate(['test']);
  }
  

}
