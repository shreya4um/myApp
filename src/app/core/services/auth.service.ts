import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedInStatus = false;

  login(email: string, password: string): boolean {
    // This is just an example logic. You should replace it with real authentication logic
    if (email === 'shreya100@gmail.com' && password === '12345678') {
      this.isLoggedInStatus = true;
      return true;
    }
    return false;
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }

  logout() {
    this.isLoggedInStatus = false;
  }
}
