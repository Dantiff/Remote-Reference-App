import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AuthService } from './services/authService';
import {Observable} from "rxjs/Rx";

@Component({
  templateUrl: '/ngViews/register/',
    directives: [ROUTER_DIRECTIVES]
})
export class RegisterComponent {

    public form = {};
    public reg_error:Boolean = false;
    public submitting:Boolean = false;

    constructor(private router: Router, private auth: AuthService) { }

    register(form) {
        console.log("Refistering!");
        console.log(form);

        this.submitting = true;

        this.auth.register(form).subscribe(
           data => {

             this.submitting = false;

             // redirect to home
             this.router.navigate(['/login']);

             return true;
           },
           error => {
             console.error("Error registering!");
             console.log(error);

             this.submitting = false;
             this.reg_error = true;

             return Observable.throw(error);
           }
        );
    }
}