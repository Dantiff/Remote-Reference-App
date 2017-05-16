import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AuthService } from './services/authService';
import { BroadcastService } from './services/broadcastService';
import { ReferenceService } from './services/referenceService';
import {Observable} from "rxjs/Rx";

@Component({
  templateUrl: '/ngViews/customers/',
    directives: [ROUTER_DIRECTIVES]
})
export class CustomersComponent {

    public form = { };
    public search_error:Boolean = false;
    public search_ID = true;

    constructor(private router: Router, private auth: AuthService,  private ref: ReferenceService, private broadcastService: BroadcastService) { }

    toogleSearch() {
        this.search_ID = this.search_ID ? false : true;
    }

    search(form) {
        this.submitting = true;

        this.ref.search(form).subscribe(
           data => {

             console.log("Search Success!");
             console.log(data);
             this.search_error = false;
             this.submitting = false;

             //Update search data


             this.broadcastService.broadcast('search-complete', "Search success");

             return true;
           },
           error => {

             console.error("Error logging in!");
             this.submitting = false;
             this.search_error = true;

             //Retrieve error object


             console.log(error);
             return Observable.throw(error);
           }
        );
    }

}