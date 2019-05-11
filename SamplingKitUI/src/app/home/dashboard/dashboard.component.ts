import { Component, OnInit } from '@angular/core';
// import { AuthService } from '../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  // public userData:object
  server: any= "http://localhost:3000/employees"
  myForm: FormGroup;
  role: string;
  data: Object;
  constructor(private fb: FormBuilder, private http:HttpClient) {
    this.getUser(); 
   this.role=sessionStorage.getItem('userRole');
   
  }

  ngOnInit() {
    this.myForm = this.fb.group({
      email: '',
      name: '',
      phone: '',
      budget: '',
      postCode: '',
      addressList: this.fb.array([]),
      ruleList: this.fb.array([]),
      testCodeList: this.fb.array([]),
    })
  }
  get addressForm() {
    return this.myForm.get('addressList') as FormArray
  }
  get ruleListForm() {
    return this.myForm.get('ruleList') as FormArray
  }
  get testCodeListForm() {
    return this.myForm.get('testCodeList') as FormArray
  }

  addAddress() {
    const address = this.fb.group({
      streetNumber: [],
      streetName1: [],
      streetName2:[],
      suit:[],
      city: [],
      country: [],
      district: [],
      region:[],
      state: [],
      zipcode:[]
    })

    this.addressForm.push(address);
  }
  deleteAddress(i) {
    this.addressForm.removeAt(i)
  }
//addRulelist&DeleteRulelist
  addRuleList() {
    const ruleList = this.fb.group({
      ruleName: [],
      ruleValue: [],
    })

    this.ruleListForm.push(ruleList);
  }

  deleteRulelist(i) {
    this.ruleListForm.removeAt(i)
  }

  //testCodeList Add & Remove

  addTestCodeList() {
    const testCodeList = this.fb.group({
      testCode: [],
      description: [],
      testName: [],
      testPrice: [],
    })

    this.testCodeListForm.push(testCodeList);
  }

  deletetestCodeList(i) {
    this.testCodeListForm.removeAt(i)
  }
  //Api call for Get employee data
  getUser() {
    this.http.get(this.server).subscribe(data => {
      this.data = data
      console.log("ufhsdjf",data)
    })
  }
  edit(){
    alert("edit data")
  }
  delete(){
    alert("delete data")
  }
}
