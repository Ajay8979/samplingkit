import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  statusForm:FormGroup;
  statusData: any;
  updatfrm : boolean= false;
  addfrm: boolean= false;
  pstatus:any
  public data: any;
  pid: any;
  id: any;
  statusId: any;

  constructor(private dataservice:DataService, private http:HttpClient,private fb:FormBuilder) { }

  ngOnInit() {
    this.statusForm=this.fb.group({
      'nameOfTheStatus':[null,Validators.required],
      })
    this.getAllstatus()
  }
  addStatus(regForm){

    this.updatfrm= false;
    this.addfrm= true;
  
  }
// Save status data
  save(formData:any){
    this.dataservice.postStatus(formData).subscribe((res)=>{
      this.getAllstatus();
    })
  }
// Get request for status
  getAllstatus(){
    this.dataservice.getStatusData().subscribe(data => {
      this.statusData = data.resultData
      console.log("status data",this.statusData);
    })
  }
  //Post request for status
  saveStatus(formData:any){
      this.dataservice.postStatus(formData).subscribe(data=>{
        console.log("adding data",data)
      })
  }

  editStatus(data){
   this.updatfrm= true;
    this.addfrm= false;
    this.statusId = data.id
    this.statusForm.setValue({
      'nameOfTheStatus':data.nameOfTheStatus,
    })
     
  }


  updateStatusData(formData:any) {
   formData.id=this.statusId;
   this.dataservice.updateStatus(formData).subscribe(data=>{
     this.getAllstatus();
   })
 
  }
  
  //Delete Status
  deleteStatus(id){
    this.dataservice.deleteStatus(id).subscribe((res)=>{
      console.log("deleted status",res);
      this.getAllstatus();
    })
  }
}
