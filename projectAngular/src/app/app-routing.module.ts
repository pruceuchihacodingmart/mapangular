import { GmapComponent } from './gmap/gmap.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from "./signup/signup.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "signup", component: SignupComponent },
  {path:"map",component:GmapComponent},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
export const routingComponents = [LoginComponent, SignupComponent,PageNotFoundComponent,GmapComponent];
