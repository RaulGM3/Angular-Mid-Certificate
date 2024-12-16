import { Component, input, signal } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-test2',
  imports: [],
  templateUrl: './test2.component.html',
  styleUrl: './test2.component.sass'
})
export class Test2Component {
  loginText = signal('login');
  loggedIn = signal(false);
  constructor (
    private authServ: AuthService
  ) {
    this.loggedIn.set (this.authServ.isLoggedIn ());
    this.loginText.set (this.loggedIn () ? 'logout' : 'login');
  }

  login () {
    if (this.loggedIn () === false) {
      this.authServ.login ();
      this.loginText.set ('logout');
      this.loggedIn.set (true);
    } else {
      this.authServ.logout ();
      this.loginText.set ('login');
      this.loggedIn.set (false);
    }
  }
}
