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
    return this.http.get("rest/ethnicGroups/getAllEthnics");
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

  //   return this.http.put(rest/Status/updateStatus' +"/"+ id );

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

    return this.http.delete('rest/SpecialEvent/deleteSpecialEvent'+"/"+ id);

  }



//sponsors details
getAddressDetails(id):Observable<any>{
  return this.http.get('rest/sponsor/addresses/'+id);
}
getRulesDetails(id):Observable<any>{
  return this.http.get('rest/sponsor/rules/'+id);
}
getTestCodeDetails(id):Observable<any>{
  return this.http.get('rest/sponsor/testCodes/'+id);
}

getServiceRequestDetails(sponsorId):Observable<any>{
  return this.http.get('rest/endUsers/'+sponsorId);
}
createTestDetails(testCodeData){
  return this.http.post("rest/testCode/createTest",testCodeData);

}
getAllTestCodeDetails():Observable<any>{
  return this.http.get('rest/testCode/getAllTestCodes'); 
}
updateTestCodeDetails(testCodeData):Observable<any>{
  return this.http.put('rest/testCode/updateTestCode',testCodeData);
}
getMultiplepostCode():Observable<any>{
  return this.http.get('rest/PostalCode/getAllPostalCodes');
}









 //Get All Postalcode 
 getAllPostalcode():Observable<any>{
  return this.http.get("rest/PostalCode/getAllPostalCodes");
}
// Post Postalcode
postPostalcode(data):Observable<any>{
  return this.http.post("rest/PostalCode/createPostalCode",data);
}

//Update Postalcode
updatePostalcode(data):Observable<any>{
  return this.http.put('rest/PostalCode/updatePostalCode',data);
}

//Delete Postalcode

deletePostalcode(id):Observable<any>{
  return this.http.delete('rest/PostalCode/deletePostalCode'+"/"+ id);
}
getPostCodeList(id):Observable<any>{
  return this.http.get('rest/sponsor/postCodes/'+id);
}



updateSelectedPostalCode(postCode,sponsorId):Observable<any>{
  return this.http.put('rest/sponsor/postCodes/update/'+sponsorId,postCode);
}
updateSelectedAddress(sponsorAddress):Observable<any>{
  return this.http.put('rest/sponsor/addresses/update',sponsorAddress)  
}


//update ethenic

editEthenicData():Observable<any>{
  return this.http.get('rest/ethnicGroups/getAllEthnicMapper') 
}
editTestListData():Observable<any>{
  return this.http.get('rest/testCode/getAllTestCodesMapper') 
}


updateEthenicData(ethinicData):Observable<any>{
  return this.http.put('rest/sponsor/addresses/update',ethinicData) 
}
getSponsorbyId(id):Observable<any>{
  return this.http.get('rest/sponsor/sponsorDetails/'+id) 
}
getuserByid(id):Observable<any>{
  return this.http.get('rest/SponsorUser/getAllUsersBySponsorId/'+id) 
}
updateSelectedRule(data):Observable<any>{
  return this.http.put('rest/sponsor/rules/update',data) 
}
getSponsorUpdate(id):Observable<any>{
  return this.http.get('rest/sponsor/sponsorWithPostalCode/'+id)
}
updateSponsorDetails(data,id):Observable<any>{
  return this.http.put('rest/sponsor/sponsorWithPostalCode/'+id,data) 
}
}






