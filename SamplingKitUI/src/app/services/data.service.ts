import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getUsersData(): Observable<any> {
    return this.http.get('rest/SponsorUser/getAllSponsorUsers');
  }

  //addingUsers(data) {
  //  return this.http.post("http://localhost:8087/samplingkit/rest/SponsorUser/createSponsorUser",data);
 // }
  getSponserUser():Observable<any>{
    return this.http.get("rest/sponsor/showAllSponsors");
  }
  // Post user
  postUsers(data):Observable<any>{
    return this.http.post("rest/SponsorUser/createUser",data);
  }
 // Delet User
  deleteUsers(id):Observable<any>{
    return this.http.delete('rest/SponsorUser/deleteSponsorUser'+"/"+ id);
  }
  updateUsers(data):Observable<any>{
    return this.http.put("rest/SponsorUser/updateSponsorUser",data);
  }
  createSponsorDetails(sponsorData):Observable<any>{
    return this.http.post("rest/SponsorUser/createSponsorUser",sponsorData);
  }
  setEthenic(ethenicData):Observable<any>{
    return this.http.post("rest/ethnicGroups/save",ethenicData);
  }
}