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
    public search_ID = false;
    public search_results:Boolean = false;
    public submitting:Boolean = false;
    public debtor = {};
    public error_object = {};

    constructor(private router: Router, private auth: AuthService,  private ref: ReferenceService, private broadcastService: BroadcastService) { }

    toogleSearch() {
        this.search_ID = this.search_ID ? false : true;
    }

    search(form) {
        this.submitting = true;

        this.ref.search_customer(form).subscribe(
           data => {

             console.log("Search Success!");
             console.log(data);
             this.search_error = false;
             this.error_object = {};
             this.submitting = false;

             //Update search data
             this.debtor = JSON.parse(data);
             this.search_results = true;


             this.broadcastService.broadcast('search-complete', "Search success");

             return true;
           },
           error => {

             console.error("Search error!");
             this.submitting = false;
             this.search_error = true;
             this.debtor = {};
             this.search_results = true;

             //Retrieve error object
             this.error_object = JSON.parse(error._body);

             console.log(this.error_object);
             return Observable.throw(error);
           }
        );
    }

}