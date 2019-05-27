import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  
  host_url="http://192.168.7.144:8080/samplingkit/";
  constructor(private http: HttpClient) { }

  getUsersData(): Observable<any> {
    return this.http.get(this.host_url+'rest/SponsorUser/getAllSponsorUsers');

    }

  
  getSponserUser():Observable<any>{
    return this.http.get(this.host_url+"rest/sponsor/showAllSponsors");
  }
  // Post user
  postUsers(data):Observable<any>{

    return this.http.post(this.host_url+"rest/SponsorUser/createUser",data);

  }
 // Delet User
  deleteUsers(id):Observable<any>{
    return this.http.delete(this.host_url+'rest/SponsorUser/deleteSponsorUser'+"/"+ id);
  }
  updateUsers(data):Observable<any>{

    return this.http.put(this.host_url+"rest/SponsorUser/updateSponsorUser",data);

  }
  createSponsorDetails(sponsorData):Observable<any>{
    return this.http.post(this.host_url+"rest/sponsor/createSponsor",sponsorData);
  }
  setEthenic(ethenicData):Observable<any>{

    return this.http.post(this.host_url+"rest/ethnicGroups/save",ethenicData);
  }
  getEthenic():Observable<any>{
    return this.http.get(this.host_url+"rest/ethnicGroups/getAllEthnics");
  }
  //All status 

  getStatusData():Observable<any>{

    return this.http.get(this.host_url+"rest/Status/getAllStatus");

  }
  getSponsorsList():Observable<any>{

    return this.http.get(this.host_url+"rest/sponsor/showAllSponsors ");

  }

  // Post Status

  postStatus(data):Observable<any>{
    return this.http.post(this.host_url+"rest/Status/createStatus",data);
  }

  //Delete Status

  deleteStatus(id):Observable<any>{
    return this.http.delete(this.host_url+'rest/Status/getStatusById'+"/"+ id);
  }

  //Edit Status

  // editStatusData(data,id):Observable<any>{

  //   return this.http.put(rest/Status/updateStatus' +"/"+ id );

  // }

 

  //All SpecialEvent 

  getSpecialEvent():Observable<any>{
    return this.http.get(this.host_url+"rest/SpecialEvent/getSpecialEvents");
  }

  // Get SpecialEvent by Id

  getSpecialEventById(id):Observable<any>{
    return this.http.get(this.host_url+"rest/SpecialEvent/getSpecialEventById" +'/'+ id);
  }

  // Post SpecialEvent

  postspecialEvent(data):Observable<any>{
    return this.http.post(this.host_url+"rest/SpecialEvent/createSpecialEvent",data);
  }

 

  //Update SpecialEvent

  updateEvents(data):Observable<any>{
    return this.http.put(this.host_url+'rest/SpecialEvent/updateSpecialEvent',data);
  }

  //Delete SpecialEvent
  deleteEvent(id):Observable<any>{
    return this.http.delete(this.host_url+'rest/SpecialEvent/deleteSpecialEvent'+"/"+ id);
  }



//sponsors details
getAddressDetails(id):Observable<any>{
  return this.http.get(this.host_url+'rest/sponsor/addresses/'+id);
}
getRulesDetails(id):Observable<any>{
  return this.http.get(this.host_url+'rest/sponsor/rules/'+id);
}
getTestCodeDetails(id):Observable<any>{
  return this.http.get(this.host_url+'rest/sponsor/testCodes/'+id);
}

getServiceRequestDetails(sponsorId):Observable<any>{
  return this.http.get(this.host_url+'rest/endUsers/'+sponsorId);
}
getAllServiceRequestDetails():Observable<any>{
  return this.http.get(this.host_url+'rest/endUsers/getAll');
}

createTestDetails(testCodeData){
  return this.http.post(this.host_url+"rest/testCode/createTest",testCodeData);
}
getAllTestCodeDetails():Observable<any>{
  return this.http.get(this.host_url+'rest/testCode/getAllTestCodes'); 

}
updateTestCodeDetails(testCodeData):Observable<any>{
  return this.http.put(this.host_url+'rest/testCode/updateTestCode',testCodeData);

}
getMultiplepostCode():Observable<any>{
  return this.http.get(this.host_url+'rest/PostalCode/getAllPostalCodes');

}
createRuleDetails(ruledata):Observable<any>{
  return this.http.post(this.host_url+"rest/rules/createRuleList",ruledata);
}

 //Get All Postalcode 
 getAllPostalcode():Observable<any>{

  return this.http.get(this.host_url+"rest/PostalCode/getAllPostalCodes");
}
// Post Postalcode
postPostalcode(data):Observable<any>{

  return this.http.post(this.host_url+"rest/PostalCode/createPostalCode",data);
}

//Update Postalcode
updatePostalcode(data):Observable<any>{

  return this.http.put(this.host_url+'rest/PostalCode/updatePostalCode',data);

}

//Delete Postalcode

deletePostalcode(id):Observable<any>{

  return this.http.delete(this.host_url+'rest/PostalCode/deletePostalCode'+"/"+ id);

}
getPostCodeList(id):Observable<any>{

  return this.http.get(this.host_url+'rest/sponsor/postCodes/'+id);

}



updateSelectedPostalCode(postCode,sponsorId):Observable<any>{

  return this.http.put(this.host_url+'rest/sponsor/postCodes/update/'+sponsorId,postCode);

}
updateSelectedAddress(sponsorAddress):Observable<any>{

  return this.http.put(this.host_url+'rest/sponsor/addresses/update',sponsorAddress)  

}


//update ethenic

editEthenicData():Observable<any>{

  return this.http.get(this.host_url+'rest/ethnicGroups/getAllEthnicMapper') 

}
editTestListData():Observable<any>{

  return this.http.get(this.host_url+'rest/testCode/getAllTestCodesMapper') 

}


updateEthenicData(ethinicData):Observable<any>{

  return this.http.put(this.host_url+'rest/ethnicGroups/update',ethinicData) 

}
getSponsorbyId(id):Observable<any>{

  return this.http.get(this.host_url+'rest/sponsor/sponsorDetails/'+id) 

}
getuserByid(id):Observable<any>{

  return this.http.get(this.host_url+'rest/SponsorUser/getAllUsersBySponsorId/'+id) 

}
updateSelectedRule(data):Observable<any>{

  return this.http.put(this.host_url+'rest/sponsor/rules/update',data) 

}
getSponsorUpdate(id):Observable<any>{

  return this.http.get(this.host_url+'rest/sponsor/sponsorWithPostalCode/'+id)

}
updateSponsorDetails(data,id):Observable<any>{

  return this.http.put(this.host_url+'rest/sponsor/sponsorWithPostalCode/'+id,data) 

}
updateStatus(data):Observable<any>{
  return this.http.put(this.host_url+'rest/Status/updateStatus/',data) 
}
getDashboardData(sponsorId):Observable<any>{
  return this.http.get(this.host_url+'rest/sponsor/sponsorOrder/'+sponsorId);

}

}






