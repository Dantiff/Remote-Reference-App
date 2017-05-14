import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
@Component({
  templateUrl: '/ngViews/login/',
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {
    constructor(private router: Router) { }

    login() {
        console.log("Loggin in!");
    }

}