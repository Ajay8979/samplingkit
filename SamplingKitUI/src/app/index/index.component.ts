import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(private authService:AuthService,private routerNavigate:Router) { }

  ngOnInit() {
  }

  LoginPage()
  {
    this.routerNavigate.navigate(['loginpageaction'])
  }


}
