import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate } from '@angular/router';
import { AuthService } from './authService';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    if(this.auth.loggedIn()) {
      return true;
    }
    else {
      console.log("Please login first");
      this.router.navigateByUrl('/login');
      return false;
    }
  }
}