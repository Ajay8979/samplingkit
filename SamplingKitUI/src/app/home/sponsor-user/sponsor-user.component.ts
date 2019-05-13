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
  mappers: any=[];
  eventdetail:boolean=false;
  ruleDataTable: any=[];


  constructor(private fb: FormBuilder,private DataService:DataService) {
    this.getSponsorList()
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
   ruleTable(selectedEthenicName,selectedGender,minage,maxage){
    var tableObj={gender:selectedGender,minage:minage,maxage:maxage}
    this.ruleDataTable.push(tableObj)
  
    var obja={ruleName:'Gender',ruleValue:selectedGender.toString(),ethnicGroupId:selectedEthenicName.id}
    var objb={ruleName:'Min-Age',ruleValue:minage,ethnicGroupId:selectedEthenicName.id}
    var objc={ruleName:'Max-Age',ruleValue:maxage,ethnicGroupId:selectedEthenicName.id}
    this.ruleList.push(obja);
    this.ruleList.push(objb);
    this.ruleList.push(objc);
    this.ruleDetails=true;
   }
   addEventDetails(eventName,startDate,endDate){
     var obj={eventName:eventName,startDate:startDate,endDate:endDate}
     this.mappers.push(obj);
     this.eventdetail=true;
   }
   testTable(testName,testCode,testDesc,isDefault){
     var obj={testName:testName,testCode:testCode,description:testDesc,isDefalut:isDefault}
     this.testCodeList.push(obj);
     this.testDetailsFlag=true;
   }

   step1Details(name,email,phone,budget,postcode){
      this.obj1={name:name,email:email,phone:phone,budget:budget,postCode:postcode}
    // this.SponsorsData.push(obj);

   }
   step2Details(streetNumber,strname1,strname2,city,country,district,region,state,zipcode){
     this.obj2={streetNumber:streetNumber,streetName1:strname1,streetName2:strname2,city:city,country:country,district:district,region:region,state:state,zipcode:zipcode}
    this.addressList.push(this.obj2);
     this.getAllEthenic()
   
     //  this.addressList.push(obj);
    }
   submitSponsorDetails(){
  
    this.obj1={name:this.name,email:this.email,phone:this.phone,budget:this.budget,postCode:this.postcode,addressList: this.addressList,ruleList:this.ruleList,mappers:this.mappers,testCodeList:this.testCodeList}
    console.log(this.obj1);
    this.DataService.createSponsorDetails(this.obj1).subscribe(data=>{
            this.getSponsorList();
    })
    
    // this.SponsorsData.push(this.addressList);
    // this.SponsorsData.push(this.ruleList);
    // this.SponsorsData.push(this.testCodeList);

   }






  ngOnInit() {
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
