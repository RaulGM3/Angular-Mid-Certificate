import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-router-test',
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './router-test.component.html',
  styleUrl: './router-test.component.sass'
})
export class RouterTestComponent {

}
