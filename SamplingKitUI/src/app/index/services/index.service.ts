import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class IndexService {

  server='rest/endUsers/validateAgeAndPostCode';
  sends='rest/endUsers/validateGenderAndEthnicGroup';
 

  fourth='rest/ethnicGroups/getAllEthnics';

  


  age:any;
  some:any;
  pass_data:Array<any>=[];
  user={};
  logindata={};
  persondata={};
  seconddata={};
  thirddata:any=[];
  fourthdata={};
  datas: Object;
  some1: any;
  value:any;
  thirdone: string;
  message1: any;
  addressid: string;
  address:any;
  tests: string;
 
  constructor(private http:HttpClient,private router:Router) { }

  send(user)
  {
     console.log(user);
     return this.http.post(this.server,user).subscribe(res => {
      this.age=res['status'];
      if(this.age=="Success")
      {
        this.router.navigate(['personsdetails']);
      }
      else
      {
        this.router.navigate(['not']);
      }
     })

  }

  sendone(user)
  {
     console.log(user);
     return this.http.post(this.sends,user).subscribe(res => {
     if(res['message']=="Success")
     {
      this.value=res['resultData'].sponsorId;
       let tests =res['resultData']['testCodes'];
      sessionStorage.setItem('sponsorId',this.value);
      sessionStorage.setItem('testCodes',this.tests); 
       this.router.navigate(['test']);
     }
     });

  }

  another(data)
  {
    this.thirdone='rest/endUsers/create/'+sessionStorage.getItem('sponsorId');

      console.log(data);
     // var obj={EthnicGroupId:sessionStorage.getItem('ethenicGroupId')}
      data.ethnicGroupId=sessionStorage.getItem('ethenicGroupId')
      return this.http.post(this.thirdone,data).subscribe(res => {
      this.message1=res['message'];
      sessionStorage.setItem('message',this.message1);
      this.some=res['status'];
      if(this.some=="Success")
      {
        this.router.navigate(['final']);
      }
      });
      
  }

  anothers(data)
  {
      return this.http.post(this.thirdone,data).subscribe(res => {
      this.some=res['status'];
      if(this.some=="Success")
      {
        this.router.navigate(['result']);
      }
      });
      
  }

  
  anothers1(data)
  {  
      console.log(data);
      return this.http.post(this.thirdone,data).subscribe(res => {
      this.some=res['status'];
      if(this.some=="Success")
      {
        alert();
        // this.router.navigate(['check']);
      }
      else
      {
        alert();
      }
      });
      
  }


  getethnic():Observable<any>
  {
    return this.http.get(this.fourth);
  }
  getOrderDetails(orderId):Observable<any>{
    return this.http.get('rest/endUsers/endUser/'+orderId);
  }

  lookup():Observable<any>
  {
      this.addressid=sessionStorage.getItem('age');
      this.address='https://api.getAddress.io/find/'+this.addressid+'/?api-key=x5CPOTrNhkKPq_1PxN6A_w18921';

      return this.http.get(this.address);
  }





}
