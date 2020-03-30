import { GmapserviceService } from "./../service/gmapservice.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-gmap",
  templateUrl: "./gmap.component.html",
  styleUrls: ["./gmap.component.css"]
})
export class GmapComponent implements OnInit {
  currentlat = null;
  currentlong;
  latitude = 51.678418;
  longitude = 7.809007;
  from = "";
  fromlat = 0;
  fromlong;
  to = "";
  tolat = 0;
  tolong = 0;
  value = "";
  dist = 0;
  price = 0;
  persons;
  valcalculated = false;
  locationChosen = false;
  availableways = false;
  personavailable = false;
  caravailable = false;
  busavailable = false;
  bikeavailable = false;
  autoavailable = false;
  bikeprice;
  carprice;
  busprice;
  autoprice;
  constructor(private place: GmapserviceService) {}

  settag(val) {
    if (val === "FROM") {
      this.from = this.value;
      this.fromlat = this.latitude;
      this.fromlong = this.longitude;
    } else if (val === "TO") {
      this.to = this.value;
      this.tolat = this.latitude;
      this.tolong = this.longitude;   
    }
  }

  calcdist() {
    var R = 6371;
    var dLat = this.deg2rad(this.tolat - this.fromlat);
    var dLon = this.deg2rad(this.tolong - this.fromlong);
    var a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(this.deg2rad(this.fromlat)) *
        Math.cos(this.deg2rad(this.tolat)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    this.dist = R * c; // Distance in km
    if (this.dist < 50 && this.persons > 0){
      this.price = Math.floor(this.dist);
      this.carprice = this.price * 5;
      this.bikeprice = this.price * 3;
      this.busprice = this.price * 2;
      this.autoprice = this.price * 4;
      this.valcalculated = true;
      this.availableways = true;
      if (this.persons > 0 && this.persons < 3) {
        this.bikeavailable = true;
        this.busavailable = false;
        this.caravailable = true;
        this.autoavailable = true;
      }
      if (this.persons > 2 && this.persons < 4) {
        this.bikeavailable = false;
        this.busavailable = false;
        this.caravailable = true;
        this.autoavailable = true;
      }
      if (this.persons > 3 && this.persons < 6) {
        this.bikeavailable = false;
        this.busavailable = false;
        this.caravailable = true;
        this.autoavailable = false;
      }
      if (this.persons > 6 && this.persons < 10) {
        this.bikeavailable = false;
        this.busavailable = true;
        this.caravailable = false;
        this.autoavailable = false;
      }
    }
    else{
      alert("Distances Should be lesser than 50 to avail services")
    }
  }

  deg2rad(deg) {
    return deg * (Math.PI / 180);
  }

  showPosition = position => {
    var a = position.coords.latitude;
    var b = position.coords.longitude;
    // console.log(a,b,typeof(this.currentlat))
    this.latitude = a;
    this.longitude = b;
    this.fromlat = this.latitude;
    this.fromlong = this.longitude;
    this.place
      .getPlaceDetails(this.latitude, this.longitude)
      .subscribe(data => {
        this.from = data["results"][0]["formatted_address"];
      }); 
    this.locationChosen = true;
  };

  onChoseLocation(event) {
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.locationChosen = true;
    this.place
      .getPlaceDetails(this.latitude, this.longitude)
      .subscribe(data => {
        this.value = data["results"][0]["formatted_address"];
      });
  }

  ngOnInit() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    }
  }
}
