import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, ActivatedRoute } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrl: './app.component.sass'
})
export class AppComponent {

  constructor (
    private router: Router,
    private route: ActivatedRoute,
    private authServ: AuthService
  ){
    // console.log (this.router.routerState);
    this.route.url.subscribe (url => {
      // console.log ('url', url);
    })
  }
  
  ngAfterContentChecked(): void {
    // console.log ('snap.url', this.route.snapshot.url)
    this.route.snapshot.url.forEach (url => {
      // console.log ('urlparam', url);
    })

  }
}
