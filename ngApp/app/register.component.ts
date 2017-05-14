import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
@Component({
  templateUrl: '/ngViews/register/',
    directives: [ROUTER_DIRECTIVES]
})
export class RegisterComponent {
    constructor(private router: Router) { }

    register() {
        console.log("Registering!");
    }

}