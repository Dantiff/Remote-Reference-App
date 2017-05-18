import {Injectable} from "@angular/core";
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions, URLSearchParams } from "@angular/http";
import {Observable} from "rxjs/Rx";
import { ExRequestOptions } from './exRequestOptions';

@Injectable()

export class ReferenceService {

  constructor(private http:Http) { }

  //Get list of users is_staff, username, email
  getUsers() {
    return this.http.get('/users.json').map((res:Response) => res.json());
  }

  //Search customer details
  search_customer(data) {
    let options = new ExRequestOptions();
    options.appendHeaders('Content-Type', 'application/json');
    return this.http.get('/api/customers/'+data.username+'/'+data.phone+'/', options).map((res:Response) => res.json());
  }

  //Fetch all data for debtors
  fetch_debtors() {
    let options = new ExRequestOptions();
    options.appendHeaders('Content-Type', 'application/json');
    return this.http.get('/api/customers/fetch_debtors/', options).map((res:Response) => res.json());
  }

  //Download data for debtors
  download_debtors(data) {
    let options = new ExRequestOptions();
    options.appendHeaders('Content-Type', 'application/json');
    let body = JSON.stringify(data);
    return this.http.post('/api/customers/download_debtors/', body, options);
  }


}