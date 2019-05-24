import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";
import { DataService } from 'src/app/services/data.service';
import { delegateToClassInput } from '@angular/core/src/render3/instructions';
declare var $: any;
@Component({
  selector: 'app-sponsor-user',
  templateUrl: './sponsor-user.component.html',
  styleUrls: ['./sponsor-user.component.scss']
})
export class SponsorUserComponent implements OnInit {

  addRuleform:FormGroup;
  commissionerform:FormGroup;
  myForm: FormGroup;
  ruleDetails: boolean =false;
  testDetailsFlag:boolean=false;
  ruleList:any=[];
  testCodeList:any=[];
  selectedtestcode:any;
  selectedethnic:any;
  sponsorDetails:FormGroup;
  addressList: any=[];
   SponsorsData:any=[];
   obj1:any;
   obj2:any;
   ethnicGroupId:any;

   ruleName:any;
   ruleValue:any;
   testCode:any;
   testName:any;
   testDesc:any;
   isDefault:any;
   name:any;
  //  email:any;
  //  phone:any;
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
   postCode:any;
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
  public sponsorId: any;
  updateSponsor:any={};
  dropdownSettings1: {};
  dropdownSettings2: {};
  dropdownSettings3: {};
  dropdownSettings4: {};
  dropdownSettings5: {};
  subItem: any=[];
 



  constructor(private fb: FormBuilder,private DataService:DataService) {
    this.addRuleform = this.fb.group({
      selectedEthenicName:  ['',Validators.required],
      selectedGender:  ['',Validators.required],
      selectedTestName:  ['',Validators.required],
      minage:  ['',Validators.required],
      maxage:  ['',Validators.required]
    })
    this.commissionerform=this.fb.group({
      name:   ['',Validators.required],
      budget: ['',Validators.required],
      selectedpostCode: ['',Validators.required],
      email: ['',Validators.required],
      phone: ['',[Validators.required,Validators.maxLength(11)]],
      streetNumber: ['',Validators.required],
      strname1: ['',Validators.required],
      city: ['',Validators.required],
      district: ['',Validators.required],
      postCode: ['',Validators.required]

    })
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
      console.log("Budget Details",this.updateSponsor.budget);
      console.log("Gender Details",this.updateSponsor.name);
      this.selectedItems =  this.updateSponsor.postalCodes;
     });
    this.multiplepostcode();
   }
   updateSponsorDetails(data,selectedItems){
    var obj={"name":data.name,"budget":data.budget,postalCodes:selectedItems}
    this.DataService.updateSponsorDetails(obj,this.sponsorId).subscribe(data=>{

      this.getSponsorList();
     });
   }
   getAllEthenic(){
    this.DataService.getEthenic().subscribe(data=>{
      this.ethenicData=data.resultData;
      console.log("All ethnic data",this.ethenicData);
    })
  }
  getSponsorList(){
    this.DataService.getSponsorsList().subscribe(data=>{
      this.SponsorsData=data.resultData;
    })
  }
   ruleTable(selectedEthenicName,selectedGender,minage,maxage,selectedTestName,sponsorId){
    this.sponsorId=sponsorId;
    for(var i = 0; i < selectedEthenicName.length; i++) {
      delete selectedEthenicName[i].ethnicName;
      delete selectedEthenicName[i].ethnicType;
  }
  for(var i = 0; i < selectedTestName.length; i++) {
    delete selectedTestName[i].testName;
    delete selectedTestName[i].description;
    delete selectedTestName[i].testCode;
    delete selectedTestName[i].isDefaultTest;
}
    var gender=selectedGender.toString();
    console.log("Selected Enthnic ",selectedEthenicName[0].id);
    var ruleobj={gender:gender,minAgeGroup:minage,maxAgeGroup:maxage,tectCodeId:selectedTestName.id,ethnicGroupId:selectedEthenicName.id,ethnicName:selectedEthenicName.ethnicName,testName:selectedTestName.testName}
    //var tableObj={gender:gender,minAgeGroup:minage,maxAgeGroup:maxage,tectCodeId:selectedTestName.id,ethnicGroupId:selectedEthenicName.id,ethnicName:selectedEthenicName.ethnicName,testName:selectedTestName.testName}
    //var tableObj={sponsor_id:sponsorId,gender:gender,minAgeGroup:minage,maxAgeGroup:maxage,tectCodeId:selectedTestName.tectCodeId,ethnicGroupId:selectedEthenicName.ethnicGroupId,ethnicName:selectedEthenicName.ethnicName,testName:selectedTestName.testName}
    var tableObj={sponsor_id:sponsorId,gender:gender,minAgeGroup:minage,maxAgeGroup:maxage,testCodes:selectedTestName,ethnicGroups:selectedEthenicName,ethnicName:selectedEthenicName.ethnicName,testName:selectedTestName.testName}
     this.ruleList.push(tableObj);
     console.log("The Rule List",this.ruleList);
     console.log(ruleobj);
  
      this.ruleDetails=true;
      gender="";minage="";maxage="";selectedTestName="";selectedEthenicName="";
   }
ruletable2(){
  this.DataService.createRuleDetails(this.ruleList).subscribe(data=>{
    this.addressList=[];
  this.getSponsorList();
  //this.ruleList="";
  
  })
}
delete(x){
//let length=this.ruleList.length;
this.ruleList.splice(x, 1);
this.getRulesDetails(x);
}
// step1Details(name,email,phone,budget,postcode){
   step1Details(name,budget,postcode){
    this.postcode=postcode;
     // this.obj1={name:name,email:email,phone:phone,budget:budget}
     this.obj1={name:name,budget:budget}
    // this.SponsorsData.push(obj);

   
  }
  //step2Details(streetNumber,strname1,strname2,city,country,district,region,state,zipcode)
  //this.obj2={streetNumber:streetNumber,streetName1:strname1,streetName2:strname2,city:city,country:country,district:district,region:region,state:state,zipcode:zipcode}
   step2Details(email,phone,streetNumber,strname1,city,district,postCode){
     this.obj2={email:email,phone:phone,streetNumber:streetNumber,streetName1:strname1,city:city,district:district,postCode:postCode}
    this.addressList.push(this.obj2);

    // email="";phone="";streetNumber="";strname1="";city="";district="";postCode="";
   
     //  this.addressList.push(obj);
    }
   submitSponsorDetails(commissionerform){
    
    for(var i = 0; i < this.ruleList.length; i++) {
      delete this.ruleList[i]['testName'];
      delete this.ruleList[i]['ethnicName'];
  }
  //this.obj1={name:this.name,email:this.email,phone:this.phone,budget:this.budget,postalCodes:this.postcode,addressList: this.addressList,ruleList:this.ruleList}
    this.obj1={name:this.name,budget:this.budget,postalCodes:this.postcode,addressList: this.addressList}
    console.log(this.obj1);
    this.DataService.createSponsorDetails(this.obj1).subscribe(data=>{
      
      this.name="";
      this.budget="";
      this.postcode="";
      this.addressList=[];
      
    this.getSponsorList();
    })
    commissionerform.reset();
   }
   getAddressDetails(id){
     this.DataService.getAddressDetails(id).subscribe(data=>{
       this.addressData=data.resultData;
       console.log("Address Details",this.addressData);
     })
   }
   getRulesDetails(id){
     this.sponsorId=id;
    this.DataService.getRulesDetails(id).subscribe(data=>{
      this.rulesData=data.resultData;
     // for(var i=0;i<=data.resultData.length;i++){
    //  var obj=data.resultData[i].ethnicGroups[i];
     //   delete obj['ethnicType'];
    //  this.subItem.push(obj);

     // }

      this.getAllEthenic();
      this.getAllTestCodeDetails();
  })

  // this.DataService.editEthenicData().subscribe(data=>{
  //   this.ethenicData=data.resultData;
  // })
  //  this.DataService.editTestListData().subscribe(data=>{
  // this.testCodeData=data.resultData;
  // })
}
  getTestCodeDetails(id){
    this.DataService.getTestCodeDetails(id).subscribe(data=>{
      this.testCodeDetails=data.resultData;
   })

 
  }
  getAllTestCodeDetails(){
    this.DataService.getAllTestCodeDetails().subscribe(response=>{
      this.testCodeData=response.resultData;
      console.log("Test code details", this.testCodeData);
    
    })
     }
    multiplepostcode(){
      this.DataService.getMultiplepostCode().subscribe(response=>{
        this.dropdownList=response.resultData;
        console
      
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
//post rule data
postRuleDetails(item){
  var ruledata={}
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
      // var ethnicGroupsData=formData.ethnicGroupId
      // var testCodesData=formData.
      // console.log(formData.ethnicGroups);
      // var updatereqObj={
      //   "id":formData.id,
      //   "gender":formData.gender,
      //   "startDate":"",
      //   "endDate":"",
      //   "minAgeGroup":formData.minAgeGroup,
      //   "maxAgeGroup":formData.maxAgeGroup,
      //   "status":formData.status,
      //   "sponsor_id": this.sponsorId,
      //   "ethnicGroups":ethnicGroupsData,
      //   "testCodes":[{}]
      // }
      delete formData ['isEditable2'];
      delete formData ['ethnicGroupId'];
        delete formData ['testCodeId'];
    //   for(var i = 0; i < formData.length; i++) {
    //     delete formData[i]['ethnicGroupId'];
    //     delete formData[i]['testCodeId'];
    // }
      console.log("Rules FormData", formData);
      var gender=formData.gender.toString();
      formData.gender=gender;

     this.DataService.updateSelectedRule(formData).subscribe(data=>{

     })
    }
    genderdata:any=['Man','Woman','Transman','Transwoman'];

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
    this.dropdownSettings1 = {
      singleSelection: false,
      idField: 'id',
      textField: 'ethnicName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownSettings2 = {
      singleSelection: false,
      idField: 'id',
      textField: 'testName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownSettings3 = {
      singleSelection: false,
      idField: 'id',
      textField: 'testName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownSettings4 = {
      singleSelection: false,
      idField: 'id',
      textField: 'testName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownSettings5 = {
      singleSelection: false,
      idField: 'id',
      textField: 'testName',
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
      $('.com').removeClass('active');
      });
      $(".pre_btn").click(function() { // Function Runs On PREVIOUS Button Click
      $(this).parent().prev().fadeIn('slow');
      $('.com').addClass('active');
      $('.cont').removeClass('active');
      $(this).parent().css({
      'display': 'none'
      });
      // Removing Class Active To Show Steps Backward;
     
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
