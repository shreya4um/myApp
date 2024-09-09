// import { CanActivateFn } from '@angular/router';

// export const authGuard: CanActivateFn = (route, state) => {
//   return true;
// };


import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
 // Assuming you have an AuthService to check login status

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    // Check if the user is logged in via AuthService
    if (this.authService.isLoggedIn()) {
      return true;  // Allow access
    } else {
      // Redirect to the login page if not authenticated
      this.router.navigate(['/auth/login']);
      return false;  // Deny access
    }
  }
}