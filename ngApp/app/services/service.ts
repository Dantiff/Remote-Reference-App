import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class AppService {

  constructor(private http:Http) { }

  //Login user
  login() {
    return this.http.post('/api-auth/login').map((res:Response) => res.json());
  }

  //Register user
  login() {
    return this.http.post('/api-auth/register').map((res:Response) => res.json());
  }

}