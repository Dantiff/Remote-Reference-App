import {Injectable} from "@angular/core";
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
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
  search(data) {
    let options = new ExRequestOptions();
    options.appendHeaders('Content-Type', 'application/json');
    let body = JSON.stringify(data);
    return this.http.post('/api/customers/details/', body, options);
  }

  //Fetch all data for debtors
  fetch_debtors(data) {
    let options = new ExRequestOptions();
    options.appendHeaders('Content-Type', 'application/json');
    let body = JSON.stringify(data);
    return this.http.post('/api/customers/fetch_debtors/', body, options);
  }

  //Download data for debtors
  download_debtors(data) {
    let options = new ExRequestOptions();
    options.appendHeaders('Content-Type', 'application/json');
    let body = JSON.stringify(data);
    return this.http.post('/api/customers/download_debtors/', body, options);
  }


}