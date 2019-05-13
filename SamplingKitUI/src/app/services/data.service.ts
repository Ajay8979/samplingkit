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
    return this.http.post("rest/sponsor/createSponsor",sponsorData);
  }
  setEthenic(ethenicData):Observable<any>{
    return this.http.post("rest/ethnicGroups/save",ethenicData);
  }
  getEthenic():Observable<any>{
    return this.http.get("rest/ethnicGroups/getAll");
  }
  //All status 

  getStatusData():Observable<any>{

    return this.http.get("rest/Status/getAllStatus");

  }
  getSponsorsList():Observable<any>{

    return this.http.get("rest/sponsor/showAllSponsors ");

  }

  // Post Status

  postStatus(data):Observable<any>{

    return this.http.post("rest/Status/createStatus",data);

  }

  //Delete Status

  deleteStatus(id):Observable<any>{

    return this.http.delete('rest/Status/getStatusById'+"/"+ id);

  }

  //Edit Status

  // editStatusData(data,id):Observable<any>{

  //   return this.http.put('http://localhost:9999/samplingkit/rest/Status/updateStatus' +"/"+ id );

  // }

 

  //All SpecialEvent 

  getSpecialEvent():Observable<any>{

    return this.http.get("rest/SpecialEvent/getSpecialEvents");

  }

  // Get SpecialEvent by Id

  getSpecialEventById(id):Observable<any>{

    return this.http.get("rest/SpecialEvent/getSpecialEventById" +'/'+ id);

  }

  // Post SpecialEvent

  postspecialEvent(data):Observable<any>{

    return this.http.post("rest/SpecialEvent/createSpecialEvent",data);

  }

 

  //Update SpecialEvent

  updateEvents(data):Observable<any>{

    return this.http.put('rest/SpecialEvent/updateSpecialEvent',data);

  }

 

  //Delete SpecialEvent

 

  deleteEvent(id):Observable<any>{

    return this.http.delete('http://localhost:8080/samplingkit/rest/SpecialEvent/deleteSpecialEvent'+"/"+ id);

  }
}
