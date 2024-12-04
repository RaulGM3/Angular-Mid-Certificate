import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BComponent } from './b/b.component';
import { AComponent } from './a/a.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AComponent, BComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'test';
}
