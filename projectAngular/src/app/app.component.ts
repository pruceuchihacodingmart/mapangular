import { Router } from "@angular/router";
import { Component } from "@angular/core";
import { AuthService, GoogleLoginProvider } from "angularx-social-login";
import { SocialUser } from "angularx-social-login";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "projectAngular";
  public user: SocialUser;
  public loggedIn: boolean;
  constructor(private authService: AuthService, private routes: Router) {}
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
  signOut(): void {
    this.authService.signOut();
    console.log("signout");
  }
  ngOnInit() {
    this.authService.authState.subscribe(user => {
      console.log(this.user);
      this.user = user;
      this.loggedIn = user != null;
      if (!this.user) {
        this.routes.navigate(["/login"]);
      }
    });
  }
}
