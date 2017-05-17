import { provideRouter, RouterConfig } from '@angular/router';

//Components
import {HomeComponent} from "./home.component";
import {LoginComponent} from "./login.component";
import {RegisterComponent} from "./register.component";
import {CustomersComponent} from "./customers.component";
import {DownloadsComponent} from "./downloads.component";

import { AuthGuard } from './services/authGuard';


const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'customers',
        component: CustomersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'downloads',
        component: DownloadsComponent,
        canActivate: [AuthGuard]
    },
];

export const appRouterProviders = [
  provideRouter(routes)
];
