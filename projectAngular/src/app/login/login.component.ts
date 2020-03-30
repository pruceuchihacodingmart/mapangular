import { LoginserviceService } from "./../service/loginservice.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { SocialUser } from "angularx-social-login";
import { AuthService, GoogleLoginProvider } from "angularx-social-login";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public user: SocialUser;
  public loggedIn: boolean;
  olduser = {
    username: "",
    password: ""
  };
  constructor(
    private loginme: LoginserviceService,
    private routes: Router,
    private authService: AuthService
  ) {}
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID); 
  }
  signOut(): void {
    this.authService.signOut();
    console.log("signout");
  }
  onsubmit() {
    if (this.olduser.username === "" || this.olduser.password === "") {
      alert("Enter the details properly");
    } else {
      this.loginme.getLoginInformation(this.olduser).subscribe(data => {
        // console.log(data['data'])
        if (data["data"] === "loggedin") {
          this.routes.navigate(["/map"]);
          alert("Logged in successfully");
        } else {
          alert("enter the right username/password");
        }
      });
    }
  }
  ngOnInit() {
    this.authService.authState.subscribe(user => {
      console.log(this.user);
      this.user = user;
      this.loggedIn = user != null;
      if(this.loggedIn){
        this.routes.navigate(["/map"]);
      }
    });
  }
}
