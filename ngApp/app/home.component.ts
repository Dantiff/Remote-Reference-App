import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
@Component({
  templateUrl: '/ngViews/home/',
    directives: [ROUTER_DIRECTIVES]
})
export class HomeComponent {
    constructor(private router: Router) { }

    goToLogin() {
        console.log("Going to login!");
        this.router.navigate(['/login']);
    }

    goToRegister() {
        alert("Going to register!")
    }

}