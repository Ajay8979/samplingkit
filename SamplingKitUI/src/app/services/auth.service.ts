import { observable } from 'rxjs';
import { Injectable,Output,EventEmitter } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders, HttpResponse, HttpEvent, HttpInterceptor, HttpHandler } from '@angular/common/http';




@Injectable({
  providedIn: "root"
})
export class AuthService {

<<<<<<< HEAD
host_url="http://192.168.7.144:8080/samplingkit/";
=======

  @Output() logindata: EventEmitter<boolean> = new EventEmitter();

 
host_url="http://192.168.1.137:8080/samplingkit/";

>>>>>>> 966d62ca838ce07d4c06b0ed105f4d6e1411af4e
  url: any = this.host_url+"rest/user/authenticate";


  constructor(private http: HttpClient) { }

  public isAuthenticate(): boolean {
    //method return true or false based on login credential
    const userData = sessionStorage.getItem('userData');

    if (userData && userData.length > 0) {
      return true;
    }
    else {
      return false;
    }
    
  }

  public loginAction(postData){
    const body = new HttpParams()
      .set('username', postData.username)
      .set('password', postData.password);
    this.http
      .post(this.url, body.toString(),
        {
          headers: new HttpHeaders()
            .set('Content-Type', 'application/x-www-form-urlencoded')
        }
      )
      .subscribe(
        (res) => {
          console.log(res);
           sessionStorage.setItem('userData', res['resultData']['token']);

           sessionStorage.setItem('username', res['resultData']['user'].username);
          sessionStorage.setItem('userRole', res['resultData']['user'].roles[0]);

       if((res['resultData']['user'].roles[0]=="COMMISSIONERUSER")|| (res['resultData']['user'].roles[0]=="ADMIN")){

            sessionStorage.setItem('sponsorId',res['resultData']['user'].sponsorId)
          }
          if(res['resultData']['user'].roles[0]=="SUPPORTUSER"){
            sessionStorage.setItem('sponsorId',res['resultData']['user'].sponsorId)
          }
          this.logindata.emit();
        });
    return true;
  }
  public SignUp(postData) { 
    //registraion api
  }
  public async logOutAction() {
    //session/local storage clear
    await sessionStorage.removeItem('userData');
    await sessionStorage.clear();
    return true;
  }

  public async getUserdata() {
    const userData = sessionStorage.getItem('userData');
    return JSON.parse(userData)
  }

}
