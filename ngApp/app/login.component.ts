import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AuthService } from './services/authService';
import { BroadcastService } from './services/broadcastService';
import {Observable} from "rxjs/Rx";

@Component({
  templateUrl: '/ngViews/login/',
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

    public form = {};
    public users;
    public login_error:Boolean = false;
    public pass_error = "";
    public non_field_errors = "";
    public submitting:Boolean = false;

    constructor(private router: Router, private auth: AuthService, private broadcastService: BroadcastService) { }

    login(form) {
        this.submitting = true;

        this.auth.login(form).subscribe(
           data => {

             console.log("Login Success!");
             this.submitting = false;

             //Save token to local storage
             let key_object = JSON.parse(data._body);
             localStorage.setItem('id_token', key_object.key);

             this.broadcastService.broadcast('user-authenticated', "User loggin success");

             // redirect to home
             this.router.navigate(['/home']);
             return true;
           },
           error => {
             this.login_error = true;

             console.error("Error logging in!");
             this.submitting = false;

             //Retrieve error
             let error_object = JSON.parse(error._body);
             console.log(error_object);

             if (error_object.password) {
                this.pass_error = error_object.password;
             }else {
                this.non_field_errors = error_object.non_field_errors;
             }

             return Observable.throw(error);
           }
        );
    }

  getUsers() {
    this.auth.getUsers()
      .subscribe(
        data => { this.users = data},
       error => {
         console.error("Error fetching users in!");
         console.log(error);
         this.login_error = true;
         return Observable.throw(error);
       }
      );
  }

}