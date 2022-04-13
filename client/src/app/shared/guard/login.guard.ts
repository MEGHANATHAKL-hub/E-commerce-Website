import { Injectable } from '@angular/core';
import {  CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardGuard implements CanActivate {
  constructor(private router : Router, private authService : AuthService) {}
  canActivate() : boolean {
    if(this.authService.loggedIn()) {
      this.router.navigate(['/home'])
      return false;
    } else {
      return true;
    }
  }
  
}

