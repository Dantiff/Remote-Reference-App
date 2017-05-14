import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AppService } from './services/service';

@Component({
  templateUrl: '/ngViews/login/',
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

    public form;
    public login_error:Boolean = false;

    constructor(private router: Router, private appService: AppService) { }

    login(form) {
        console.log("Loggin in!");
        this.appService.login(form).subscribe(
          err => { this.login_error = true }
        );
    }
}