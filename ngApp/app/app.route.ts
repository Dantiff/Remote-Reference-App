import { provideRouter, RouterConfig } from '@angular/router';
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";


const routes: RouterConfig = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];

export const appRouterProviders = [
  provideRouter(routes)
];
