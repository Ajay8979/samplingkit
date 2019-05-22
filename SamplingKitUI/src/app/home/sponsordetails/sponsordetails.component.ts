import { DataService } from 'src/app/services/data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
declare var $: any;

@Component({
  selector: 'app-sponsordetails',
  templateUrl: './sponsordetails.component.html',
  styleUrls: ['./sponsordetails.component.scss']
})
export class SponsordetailsComponent implements OnInit {
  [x: string]: any;
  updateAddressForm:FormGroup;
  sponsorDetailsuser:any;
  sponsorDetails: any;
  streetNumber: any;
  streetName1: any;
  city: any;
  country: any;
  district: any;
  region: any;
  state: any;
  postCode: any;
  streetName2: any;
  name: any;
  phone: any;
  budget: any;
  email: any;
  testName:any;
  ethnicName:any;
  sponsorDetailsRule: any;
  postalCodesDetails: any;
  status:any;
  
  public sponsorId:any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};

  constructor(private dataservice:DataService, private fb:FormBuilder) {
    this.getSponsorbyId();
    this.getAllEthenic();
    this.getAllTestCodedata()
    this.sponsorId=sessionStorage.getItem('sponsorId');
    this.updateAddressForm=this.fb.group({
      'email':[null,Validators.required],
      'phone':[null,Validators.required],
      'streetNumber':['',Validators.required],
      'streetName1':[null,Validators.required],
      'city':['',Validators.required],
      'district':[null,Validators.required],
      'postCode':[null,Validators.required],
      
       })

   }
   initializeData(){
    this.multiplepostcode();
    this.getAllTestCodeDetails();
    this.getAllEthenic()
 }
   updateSelectedAddress(formData){
     console.log(formData);
    delete formData ['isEditable3'];
      this.dataservice.updateSelectedAddress(formData).subscribe(data=>{
        console.log("Update data", data);
        this. getPostCodeList(this.sponsorId);
      })
  }
  getPostCodeList(id){
    this.sponsorId=id;
    this.dataservice.getPostCodeList(id).subscribe(response=>{
      this.testCodeList=response.resultData;
      this. multiplepostcode();
     
    })
  }
  getPostalCodeforEdit(id){
    id=this.sponsorId;
    this.dataservice.getSponsorUpdate(id).subscribe(data=>{
     this.updateSponsor=data.resultData;
     this.selectedItems =  this.updateSponsor.postalCodes;
    });
   this.multiplepostcode();
  }
  
 
  updateSelectedRule(formData:any){
    delete formData ['isEditable10'];
    delete formData ['ethnicType'];
    delete formData ['description'];
    delete formData ['testCode'];
    
    var gender=formData.gender.toString();
    formData.gender=gender;

   this.dataservice.updateSelectedRule(formData).subscribe(data=>{
this.getAllEthenic();
this.getAllTestCodedata();
   })
  }
  getAllEthenic(){
    this.dataservice.getEthenic().subscribe(data=>{
      this.ethenicData=data.resultData;
      console.log("Ethnic Details",this.ethenicData);
    })
  }
  getAllTestCodedata(){
    this.dataservice.editTestListData().subscribe(data=>{
      this.testCodeData=data.resultData;
      })
  }
 
  getSponsorList(){
    this.dataservice.getSponsorsList().subscribe(data=>{
      this.SponsorsData=data.resultData;
      console.log("Test Code Details",this.SponsorsData);
    })
  }
  updateSponsorDetails(name,budget,selectedItems){
    console.log(selectedItems);
    var datarequest={"name":name,"budget":budget,"postalCodes":selectedItems}
    this.dataservice.updateSponsorDetails(datarequest,this.sponsorId).subscribe(data=>{
     this.getSponsorList();
     });
   }
   onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
 

  getSponsorbyId(){
  this.dataservice.getSponsorbyId(sessionStorage.getItem('sponsorId')).subscribe(data=>{
    this.sponsorDetails=data.resultData;
    console.log("Complete Api Details",this.sponsorDetails);
    
    //Sponsor user details
    this.sponsorDetailsuser=this.sponsorDetails.sponsor;
    this.name=this.sponsorDetailsuser.name;
    this.budget=this.sponsorDetailsuser.budget;
    console.log("sponser name",this.name);
    console.log(this.sponsorDetailsuser);


    //rules

    this.sponsorDetailsRule=this.sponsorDetails.rules;
    //console.log("sponsorDetailsRule",this.sponsorDetailsRule);
    this.postalCodesDetails=data.resultData.postalCodes;
    this.testcodeDetails=data.resultData.testCodes;


    //address details
  this.address=data.resultData.addresses[0];

    // this.streetNumber=this.sponsorDetails.addresses.streetNumber;
    // this.streetName1=this.sponsorDetails.addresses[0].streetName1;
    // this.streetName2=this.sponsorDetails.addresses[0].streetName2;
    // this.city=this.sponsorDetails.addresses[0].city;
    // this.country=this.sponsorDetails.addresses[0].country;
    // this.district=this.sponsorDetails.addresses[0].district;
    // this.region=this.sponsorDetails.addresses[0].region;
    // this.state=this.sponsorDetails.addresses[0].state;
    // this.zipcode=this.sponsorDetails.addresses[0].zipcode;

    // this.sponsorDetails=data.resultData.sponsor;
    // this.name=this.sponsorDetails=data.resultData.sponsor.name;
    // console.log("sponser name",this.sponsorDetails.name);
    // this.phone=this.sponsorDetails=data.resultData.sponsor.phone;
    // this.email=this.sponsorDetails=data.resultData.sponsor.email;
    // this.budget=this.sponsorDetails=data.resultData.sponsor.budget;
  })
  }
  
  multiplepostcode(){
    this.dataservice.getMultiplepostCode().subscribe(response=>{
      this.dropdownList=response.resultData;
    
    })
    /*
   this.dropdownList = [
    { item_id: 1, item_text: 'Mumbai' },
    { item_id: 2, item_text: 'Bangaluru' },
    { item_id: 3, item_text: 'Pune' },
    { item_id: 4, item_text: 'Navsari' },
    { item_id: 5, item_text: 'New Delhi' }
  ];
*/
 
  }
  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'postalCode',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    
    
       
  }

}
