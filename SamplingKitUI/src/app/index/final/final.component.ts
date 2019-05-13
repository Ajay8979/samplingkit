import { IndexService } from './../services/index.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {
  
  requestobj: {};
  firstname: any;
  id: string;

  

  constructor(private sends:IndexService) { }

  ngOnInit() 
  {
    this.requestobj={};
    this.firstname=this.sends.seconddata['firstName'];
    this.id=sessionStorage.getItem('message');
  }
}
