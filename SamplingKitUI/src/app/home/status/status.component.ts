import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.scss']
})
export class StatusComponent implements OnInit {
  
  statusData: any;
  updatfrm : boolean= false;
  addfrm: boolean= false;
  pstatus:any
  public data: any;
  pid: any;
  id: any;

  constructor(private dataservice:DataService, private http:HttpClient) { }

  ngOnInit() {
    this.getAllstatus()
  }
  addStatus(regForm){
    regForm.reset();
    this.updatfrm= false;
    this.addfrm= true;
  }
// Save status data
  save(regForm:NgForm){
    this.dataservice.postStatus(regForm).subscribe((res)=>{
      console.log("save data", res);
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
    console.log("hfdhf",data)
    this.data = data;

    this.pstatus = this.data.nameOfTheStatus
    this.id = this.data.id
  }

  //Update Status

  // updateStatusData(){
  // var dt = { id: this.data.id, nameOfTheStatus: this.pstatus }
  //   this.dataservice.editStatusData(this.id,dt).subscribe((res)=>{
  //     console.log("updating data",res)
  //   })
  // }
  
  updateStatusData() {
    var dt = { id:  this.data.id, nameOfTheStatus: this.pstatus}
    this.http.put('rest/Status/updateStatus' + "/" + this.id, dt).subscribe(data => {
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
