import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder} from '@angular/forms'
import { DataService } from 'src/app/services/data.service';
@Component({
  selector: 'app-ethenicgroup',
  templateUrl: './ethenicgroup.component.html',
  styleUrls: ['./ethenicgroup.component.scss']
})
export class EthenicgroupComponent implements OnInit {
 EmployeeForm:FormGroup;
  constructor(private fb:FormBuilder,private dataService:DataService) { }

  ngOnInit() {
    this.EmployeeForm=this.fb.group({
      'ethnicType':[null,Validators.required],
      'ethnicName':[null,Validators.required],
      })
  }
  onSubmit(formData:any){
    this.dataService.setEthenic(formData).subscribe(data=>{
      console.log(data)
    })
  }

}
