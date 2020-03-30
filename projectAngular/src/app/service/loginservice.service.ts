import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  constructor(private http: HttpClient) {
  }
 getLoginInformation=(details)=>{
  //  console.log(details)
   return this.http.post("http://localhost:3006/login/details",details)
 }}

