import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;
  constructor() { }
  login (name: string, password: string): boolean {
    if (name === '' && password === '') {
      this.isAuthenticated = true
      return true
    }
    return false
  }

  logOut(): void {
    this.isAuthenticated = false
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated
  }
}
