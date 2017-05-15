import { Component, OnInit } from '@angular/core';
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AuthService } from './services/authService';

@Component({
    selector: 'my-app',
    templateUrl: '/ngViews/template/',
    directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {

    public isAuth:boolean = false;

    constructor(private router: Router, private auth: AuthService) { }


    ngOnInit(){
        this.checkAuth();
    };

    checkAuth() {
        if(this.auth.loggedIn()) {
          console.log("Authorized");
          this.isAuth = true;
          return true;
        } else {
          console.log("Unauthorized");
          this.isAuth = false;
          return false;
        }
    }

    logout () {
        console.log("Logging out!");

        this.auth.logout().subscribe(
           data => {

             console.error("Success logout!");
             console.log(data);

             //Save token to local storage
             localStorage.removeItem('id_token');

             console.log(localStorage.getItem('id_token'));

             // redirect to home
             this.router.navigate(['/home']);
             return true;
           },
           error => {
             console.error("Could not logout!");
             console.log(error);

             this.login_error = true;
             return Observable.throw(error);
           }
        );
    }

}