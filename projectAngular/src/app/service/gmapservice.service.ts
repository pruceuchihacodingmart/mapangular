import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GmapserviceService {
  constructor(private http:HttpClient){
   }
   getPlaceDetails(lat,long){
  return this.http.get(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&sensor=true&key=AIzaSyAEhm5RCEkDemhlH10LIfIc3m1vJCLBnRM`)
  
  }
}
