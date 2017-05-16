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
    public pass_error = "";
    public error_object = {};

    constructor(private router: Router, private auth: AuthService) { }

    register(form) {
        console.log("Registering!");
        console.log(form);

        this.submitting = true;

        if (form.password1 != form.password2) {
            this.submitting = false;
            this.reg_error = true;
            this.pass_error = "Password input do not match";
            return Observable.throw("Password input do not match");
        }

        form.password = form.password1;

        this.auth.register(form).subscribe(
           data => {

             this.reg_error = false;
             this.submitting = false;
             this.error_object = {};
             console.log("Successfully registered");
             console.log(data);

             // redirect to home
             this.router.navigate(['/login']);

             return true;
           },
           error => {
             console.error("Error registering!");
             console.log(error);

             this.submitting = false;
             this.reg_error = true;

             //Retrieve error
             this.error_object = JSON.parse(error._body);

             return Observable.throw(error);
            }
        );

    }
}