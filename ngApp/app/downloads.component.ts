import { Component, OnInit } from "@angular/core";
import { ROUTER_DIRECTIVES, Router } from '@angular/router';
import { AuthService } from './services/authService';
import { BroadcastService } from './services/broadcastService';
import { ReferenceService } from './services/referenceService';
import {Observable} from "rxjs/Rx";

@Component({
  templateUrl: '/ngViews/downloads/',
    directives: [ROUTER_DIRECTIVES]
})
export class DownloadsComponent {

    public submitting:Boolean = false;
    public debtors = {};
    public error_object = {};
    public no_data:Boolean = false;

    constructor(private router: Router, private auth: AuthService,  private ref: ReferenceService, private broadcastService: BroadcastService) { }

    ngOnInit(){
        this.fetchDebtors();
    };


    fetchDebtors() {
        this.submitting = true;

        this.ref.fetch_debtors().subscribe(
           data => {

             console.log("Fetch Debtors Success!");
             console.log(data);
             this.submitting = false;
             this.no_data = false;

             //Update search data
             this.debtors = JSON.parse(data);


             this.broadcastService.broadcast('debtors-retrieved', "Debtors Retrieved");

             return true;
           },
           error => {

             console.error("Error fetching debtors information!");
             this.submitting = false;
             this.debtors = {};
             this.no_data = true;

             //Retrieve error object
             this.error_object = JSON.parse(error._body)
             console.log(error)

             console.log(error);
             return Observable.throw(error);
           }
        );
    }

}