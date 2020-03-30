import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class SignupserviceService {
  constructor(private http: HttpClient) {
  }
 getSignupInformation(details){
   return this.http.post("http://localhost:3006/signup/details",details)
 }
}
