import {Injectable} from "@angular/core";
import {HTTP_PROVIDERS, Http, Response, Headers, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Rx";

@Injectable()

export class AppService {

  constructor(private http:Http) { }

  //Get list of users is_staff, username, email
  getUsers() {
    this.http.get('/users').map((res:Response) => res.json())
  }

  //Login user
  login(creds) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(creds);
    return this.http.post('/api-auth/login/', body, headers).map((res: Response) => res.json());
  }

  //Register user
  register(creds) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    let body = JSON.stringify(creds);
    return this.http.post('/api-auth/register/', body, headers).map((res: Response) => res.json());
  }

}