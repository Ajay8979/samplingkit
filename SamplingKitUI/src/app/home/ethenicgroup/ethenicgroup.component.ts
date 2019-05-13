import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-ethenicgroup',
  templateUrl: './ethenicgroup.component.html',
  styleUrls: ['./ethenicgroup.component.scss']
})
export class EthenicgroupComponent implements OnInit {
  ethenicData:any=[];
  constructor(private dataService:DataService) { 
    this.getAllEthenic()
  }
  ngOnInit() {
  
  }
  createEthenic(ethnicType,ethnicName){
    var obj={ethnicType:ethnicType,ethnicName:ethnicName}
    this.dataService.setEthenic(obj).subscribe(data=>{
      this.getAllEthenic();
    })
  }
  getAllEthenic(){
    this.dataService.getEthenic().subscribe(data=>{
      this.ethenicData=data.resultData;
    })
  }
}
