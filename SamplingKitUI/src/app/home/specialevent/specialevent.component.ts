import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-specialevent',
  templateUrl: './specialevent.component.html',
  styleUrls: ['./specialevent.component.scss']
})
export class SpecialeventComponent implements OnInit {
  updatfrm : boolean= false;
  addfrm: boolean= false;
  data: NgForm;
  eventData: any;
  peventName:any;
  id: number;

  constructor(private dataservice:DataService, public router: Router, 
    private route: ActivatedRoute) { 
   
    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log("Id: ", this.id);
    });
  }

  ngOnInit() {
    this.getAllspecialEvent()
    // this.getEventById(this.id);
  }
  add(regForm){
    regForm.reset();
    this.updatfrm= false;
    this.addfrm= true;
  }
  // Save Special Event
  saveEvent(regForm:NgForm){
    this.dataservice.postspecialEvent(regForm).subscribe((res)=>{
      console.log("savind data is",res);
      this.getAllspecialEvent();
    })
  }

  //Update Special Event
 updateEvent(){
   var dt = { id:this.data['id'], eventName: this.peventName}
   this.dataservice.updateEvents(dt).subscribe((res)=>{
     console.log(res)
     this.getAllspecialEvent();
   })
 }
// Get all Special Event
  getAllspecialEvent(){
    if (this.id !=0) {
      this.dataservice.getSpecialEvent().subscribe((res)=>{
      // console.log("getting data",res)
      this.eventData = res.resultData
      console.log("getting data",res.resultData)
    })
    }
    
  }
  // Get all Special Event By Id

  getEventById(id){
    this.dataservice.getSpecialEventById(id).subscribe((res)=>{
      // this.id = res.resultData.id;
      console.log("getting data gfgfd",res)
    })
  }
  editSpecialevent(data){
     this.updatfrm= true;
     this.addfrm= false;
     this.data =data
     console.log("hfdhf",this.data)
   //this.peventName = this.data.eventName
    this.id = this.data['id'];
   this.peventName = data['eventName'];
    

   }

   //Delete Special event

  deleteSpecialEvent(id){
    debugger;
    this.dataservice.deleteEvent(id).subscribe((res)=>{
      console.log("deleted status",res);
      this.getAllspecialEvent();
    })
  }
 
}
