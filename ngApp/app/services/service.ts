import {Injectable} from "@angular/core";
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";
import { ExRequestOptions } from './exRequestOptions';

@Injectable()

export class AppService {

  constructor(private http:Http) { }

  //Get list of users is_staff, username, email
  getUsers() {
    return this.http.get('/users.json').map((res:Response) => res.json());
  }

  //Login user
  login(creds) {
    let options = new ExRequestOptions();
    options.appendHeaders('Content-Type', 'application/json');
    let body = JSON.stringify(creds);
    return this.http.post('/api-auth/login/', body, options).map((res: Response) => res.json());
  }

  //Register user
  register(creds) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(creds);
    return this.http.post('/api-auth/register/', body, headers).map((res: Response) => res.json());
  }

}