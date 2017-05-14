import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AppService } from './services/service';
import {Observable} from "rxjs/Rx";
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  templateUrl: '/ngViews/login/',
    directives: [ROUTER_DIRECTIVES]
})
export class LoginComponent {

    public form = {};
    public users;
    public login_error:Boolean = false;

    constructor(private router: Router, private appService: AppService, private msg: FlashMessagesService) { }

    login(form) {
        console.log("Loggin in!");
        console.log(form);

        this.appService.login(form).subscribe(
           data => {
            this.msg.grayOut(true);
            this.msg.show('Login Successful!', { cssClass: 'success-message' });
             // redirect to home
             this.router.navigate(['/home']);
             return true;
           },
           error => {
             console.error("Error logging in!");
             console.log(error);

             this.msg.grayOut(true);
             this.msg.show('Error loggin in!', { cssClass: 'error-message' });

             this.login_error = true;
             return Observable.throw(error);
           }
        );
    }

  getUsers() {
    this.appService.getUsers()
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