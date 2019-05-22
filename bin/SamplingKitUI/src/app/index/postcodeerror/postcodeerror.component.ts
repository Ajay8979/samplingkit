import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-postcodeerror',
  templateUrl: './postcodeerror.component.html',
  styleUrls: ['./postcodeerror.component.scss']
})
export class PostcodeerrorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
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
