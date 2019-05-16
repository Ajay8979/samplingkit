import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-testcode',
  templateUrl: './testcode.component.html',
  styleUrls: ['./testcode.component.scss']
})
export class TestcodeComponent implements OnInit {
  testCodeData: any;

  constructor(private dataservice:DataService) {
    this. getAllTestCodeDetails();
   }
  creattestDetails(testName,testCode,description){
    var obj={testCode:testCode,description:description,testName:testName};
    this.dataservice.createTestDetails(obj).subscribe(data=>{
      this. getAllTestCodeDetails();
   
    })
  }
  getAllTestCodeDetails(){
 this.dataservice.getAllTestCodeDetails().subscribe(response=>{
   this.testCodeData=response.resultData;
 
 })
  }
  updateTestCode(testName,testCode,description,id){
    var obj={testCode:testCode,description:description,testName:testName,id:id};
    this.dataservice.updateTestCodeDetails(obj).subscribe(data=>{
      this. getAllTestCodeDetails();
   
    })
  }


  ngOnInit() {
  }

}
