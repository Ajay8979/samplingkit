import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";
import { DataService } from 'src/app/services/data.service';
declare var $: any;
@Component({
  selector: 'app-sponsor-user',
  templateUrl: './sponsor-user.component.html',
  styleUrls: ['./sponsor-user.component.scss']
})
export class SponsorUserComponent implements OnInit {
  myForm: FormGroup;
  ruleDetails: boolean =false;
  testDetailsFlag:boolean=false;
  ruleList:any=[];
  testCodeList:any=[];
  sponsorDetails:FormGroup;
  addressList: any=[];
   SponsorsData:any=[];
   obj1:any;
   obj2:any;

   ruleName:any;
   ruleValue:any;
   testCode:any;
   testName:any;
   testDesc:any;
   isDefault:any;
   name:any;
   email:any;
   phone:any;
   budget:any;
   postcode:any;
   streetNumber:any;
   strname1:any;
   strname2:any;
   city:any;
   country:any;
   district:any;
   region:any;
   state:any;
   zipcode:any;
  ethenicData: any=[];

  eventdetail:boolean=false;
  ruleDataTable: any=[];
  addressData: any=[];
  rulesData: any=[];
  testCodeDetails: any=[];
  testCodeData: any=[];
  multiplepostdata: any=[];
  postCodeData: any=[];
  postalCodes: any=[];

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  postalCodeName: any;
  selectedpostCode: any;
  sponsorId: any;
  updateSponsor:any={};
 



  constructor(private fb: FormBuilder,private DataService:DataService) {
    this.getSponsorList();
  
   }
   initializeData(){
      this.multiplepostcode();
      this.getAllTestCodeDetails();
      this.getAllEthenic()
   }
   getPostalCodeforEdit(id){
     this.sponsorId=id;
     this.DataService.getSponsorUpdate(id).subscribe(data=>{
      this.updateSponsor=data.resultData;
      this.selectedItems =  this.updateSponsor.postalCodes;
     });
    this.multiplepostcode();
   }
   updateSponsorDetails(data){
    this.DataService.updateSponsorDetails(data,this.sponsorId).subscribe(data=>{

      this.getSponsorList();
     });
   }
   getAllEthenic(){
    this.DataService.getEthenic().subscribe(data=>{
      this.ethenicData=data.resultData;
    })
  }
  getSponsorList(){
    this.DataService.getSponsorsList().subscribe(data=>{
      this.SponsorsData=data.resultData;
    })
  }
   ruleTable(selectedEthenicName,selectedGender,minage,maxage,selectedTestName){
     
    var gender=selectedGender.toString();
    var tableObj={gender:gender,minAgeGroup:minage,maxAgeGroup:maxage,tectCodeId:selectedTestName.id,ethnicGroupId:selectedEthenicName.id,ethnicName:selectedEthenicName.ethnicName,testName:selectedTestName.testName}
     this.ruleList.push(tableObj)

      this.ruleDetails=true;
   }

   step1Details(name,email,phone,budget,postcode){
    this.postcode=postcode;
      this.obj1={name:name,email:email,phone:phone,budget:budget}
    // this.SponsorsData.push(obj);

   }
   step2Details(streetNumber,strname1,strname2,city,country,district,region,state,zipcode){
     this.obj2={streetNumber:streetNumber,streetName1:strname1,streetName2:strname2,city:city,country:country,district:district,region:region,state:state,zipcode:zipcode}
    this.addressList.push(this.obj2);
    
   
     //  this.addressList.push(obj);
    }
   submitSponsorDetails(){
    for(var i = 0; i < this.ruleList.length; i++) {
      delete this.ruleList[i]['testName'];
      delete this.ruleList[i]['ethnicName'];
  }
    this.obj1={name:this.name,email:this.email,phone:this.phone,budget:this.budget,postalCodes:this.postcode,addressList: this.addressList,ruleList:this.ruleList}
    console.log(this.obj1);
    this.DataService.createSponsorDetails(this.obj1).subscribe(data=>{
      this.addressList=[];
    this.getSponsorList();
    })
   }
   getAddressDetails(id){
     this.DataService.getAddressDetails(id).subscribe(data=>{
       this.addressData=data.resultData;
     })
   }
   getRulesDetails(id){
    this.DataService.getRulesDetails(id).subscribe(data=>{
      this.rulesData=data.resultData;
  })

  this.DataService.editEthenicData().subscribe(data=>{
    this.ethenicData=data.resultData;
  })
   this.DataService.editTestListData().subscribe(data=>{
  this.testCodeData=data.resultData;
  })
}
  getTestCodeDetails(id){
    this.DataService.getTestCodeDetails(id).subscribe(data=>{
      this.testCodeDetails=data.resultData;
   })

 
  }
  getAllTestCodeDetails(){
    this.DataService.getAllTestCodeDetails().subscribe(response=>{
      this.testCodeData=response.resultData;
    
    })
     }
    multiplepostcode(){
      this.DataService.getMultiplepostCode().subscribe(response=>{
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
    getPostCodeList(id){
      this.sponsorId=id;
      this.DataService.getPostCodeList(id).subscribe(response=>{
        this.testCodeList=response.resultData;
        this. multiplepostcode();
       
      })
    }
    updatePostalCode(postalId){

    }
    onItemSelect(item: any) {
      console.log(item);
    }
    onSelectAll(items: any) {
      console.log(items);
    }

    //editPostalCode(postalCodeName){
      //this.selectedpostCode=postalCodeName;
    //}
    updateSelectedPostalCode(postalId){
      var postCode={id:postalId.id}
      this.DataService.updateSelectedPostalCode(postCode,this.sponsorId).subscribe(res=>{
       this. getPostCodeList(this.sponsorId);
      })
    }
    updateSelectedAddress(formData:any){
      delete formData ['isEditable1'];
        this.DataService.updateSelectedAddress(formData).subscribe(data=>{
          this. getPostCodeList(this.sponsorId);
        })
    }
    updateSelectedRule(formData:any){
      delete formData ['isEditable2'];
      var gender=formData.gender.toString();
      formData.gender=gender;

     this.DataService.updateSelectedRule(formData).subscribe(data=>{

     })
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
    
    //next form
    $(document).ready(function() {
      var count = 0; // To Count Blank Fields
      /*------------ Validation Function-----------------*/
      $(".submit_btn").click(function(event) {
      var radio_check = $('.rad'); // Fetching Radio Button By Class Name
      var input_field = $('.text_field'); // Fetching All Inputs With Same Class Name text_field & An HTML Tag textarea
      var text_area = $('textarea');
      // Validating Radio Button
      if (radio_check[0].checked == false && radio_check[1].checked == false) {
      var y = 0;
      } else {
      var y = 1;
      }
      // For Loop To Count Blank Inputs
      for (var i = input_field.length; i > count; i--) {
      if (input_field[i - 1].value == '' || text_area.value == '') {
      count = count + 1;
      } else {
      count = 0;
      }
      }
      // Notifying Validation
      if (count != 0 || y == 0) {
      alert("*All Fields are mandatory*");
      event.preventDefault();
      } else {
      return true;
      }
      });
      /*---------------------------------------------------------*/
      $(".next_btn").click(function() { // Function Runs On NEXT Button Click
      $(this).parent().next().fadeIn('slow');
      $(this).parent().css({
      'display': 'none'
      });
      // Adding Class Active To Show Steps Forward;
      $('.active').next().addClass('active');
      });
      $(".pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
      $(this).parent().prev().fadeIn('slow');
      $(this).parent().css({
      'display': 'none'
      });
      // Removing Class Active To Show Steps Backward;
      $('.active:last').removeClass('active');
      });
      // Validating All Input And Textarea Fields
      $(".submit_btn").click(function(e) {
      if ($('input').val() == "" || $('textarea').val() == "") {
      alert("*All Fields are mandatory*");
      return false;
      } else {
      return true;
      }
      });
      
      });

       
  }
 
  
}
