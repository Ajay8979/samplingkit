import { IndexService } from './../services/index.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss']
})
export class FinalComponent implements OnInit {
  
  requestobj: {};
  firstname: any;
  id: string;

  constructor(private sends:IndexService,private router:Router) { }

  ngOnInit() 
  {
    this.requestobj={};
    this.firstname=this.sends.seconddata['firstName'];
    this.id=sessionStorage.getItem('message');
  }

  
  viewResult()
  {
    this.router.navigate(['viewresults']);
  }

  LoginPage()
  {
    this.router.navigate(['loginpageaction']);
  }

}
