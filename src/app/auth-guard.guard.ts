import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {
  const authServ = inject (AuthService);
  if (authServ.isLoggedIn ()) {
    console.log (authServ.isLoggedIn ())
    return true;
  } else {
    console.log (authServ.isLoggedIn ())
    return false;
  }

};
