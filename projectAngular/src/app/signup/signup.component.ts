import { SignupserviceService } from "./../service/signupservice.service";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.css"]
})
export class SignupComponent implements OnInit {
  newuser = {
    username: "",
    password: "",
    repassword: "",
    email: ""
  };
  constructor(private signup: SignupserviceService,private routes:Router) {}

  onsubmit() {
    if (
      this.newuser.username === "" ||
      this.newuser.email === "" ||
      this.newuser.password === "" ||
      this.newuser.repassword === ""
    ) {
      alert("Enter the details properly");
    } else if(this.newuser.password===this.newuser.repassword){
      this.signup
        .getSignupInformation(this.newuser)
        .subscribe(data=>{
          console.log(data)
          if(data){
          this.routes.navigate(['/login'])
        }});
        this.newuser = {
          username: "",
          password: "",
          repassword: "",
          email: ""
        };
    }
  }

  ngOnInit() {}
}
