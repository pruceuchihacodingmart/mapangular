import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule, routingComponents } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./material/material.module";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { FormsModule } from "@angular/forms";
import { AgmCoreModule } from "@agm/core";
import { GmapComponent } from "./gmap/gmap.component";
import { SocialLoginModule, AuthServiceConfig,GoogleLoginProvider } from "angularx-social-login";



let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("363999158660-rr4hk2joi3bukiv83tfoh2uqq5o9ucnn.apps.googleusercontent.com")
  }
]
)
export function provideConfig() {
  return config;
}
 

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    routingComponents,
    PageNotFoundComponent,
    GmapComponent,
  ],
  imports: [
    BrowserModule,
    SocialLoginModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyAEhm5RCEkDemhlH10LIfIc3m1vJCLBnRM"
    })
  ],
  providers: [{
    provide: AuthServiceConfig,
    useFactory: provideConfig
    
  }],
  bootstrap: [AppComponent]
})
export class AppModule {}
