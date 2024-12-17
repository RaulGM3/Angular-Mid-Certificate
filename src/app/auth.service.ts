import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLoggedIn = signal (false);
  isSaved = signal (false);

  constructor() { }

  login () {
    this.isLoggedIn.set (true);
    console.log ('login activado', this.isLoggedIn ())
  }

  logout () {
    this.isLoggedIn.set (false);
    console.log ('logout activado', this.isLoggedIn ())
  }

  save () {
    this.isSaved.set (true);
  }
}
