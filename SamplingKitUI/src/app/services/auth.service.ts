import { observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders, HttpResponse, HttpEvent, HttpInterceptor, HttpHandler } from '@angular/common/http';

@Injectable({
  providedIn: "root"
})
export class AuthService {
  url: any = "rest/user/authenticate";

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
           sessionStorage.setItem('userData', res['resultData']['token']);
          sessionStorage.setItem('userRole', res['resultData']['user'].roles[0]);
          // localStorage.setItem("UserName",postData.username);
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
