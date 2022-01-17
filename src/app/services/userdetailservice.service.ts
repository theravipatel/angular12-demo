import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdetailserviceService {

  user_detail_url = 'https://reqres.in/api/users';
  constructor(private http:HttpClient) { }

  userdetails(){
    return this.http.get(this.user_detail_url);
  }

  saveUserDetails(data:any){
    return this.http.post(this.user_detail_url,data);
  }
}
