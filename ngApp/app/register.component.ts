import {Component} from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AppService } from './services/service';
import {Observable} from "rxjs/Rx";

@Component({
  templateUrl: '/ngViews/register/',
    directives: [ROUTER_DIRECTIVES]
})
export class RegisterComponent {

    public form = {};
    public reg_error:Boolean = false;

    constructor(private router: Router, private appService: AppService) { }

    register(form) {
        console.log("Refistering!");
        console.log(form);
        this.appService.register(form).subscribe(
           data => {
             // redirect to home
             this.router.navigate(['/login']);
             return true;
           },
           error => {
             console.error("Error registering!");
             console.log(error);
             this.reg_error = true;
             return Observable.throw(error);
           }
        );
    }
}