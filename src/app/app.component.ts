import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BComponent } from './b/b.component';
import { AComponent } from './a/a.component';
import { YoutubeButtonComponent } from './youtube-button/youtube-button.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AComponent, BComponent, YoutubeButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  title = 'test';
  renderMe = false;

  render () {
    this.renderMe = true;
  }
}
