import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../../auth.service';

@Component({
  selector: 'app-child',
  imports: [FormsModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.sass'
})
export class ChildComponent {
  asdf = '';
  saved = signal (false);
  
  constructor (private authService: AuthService) {}

  toSave () {
    this.saved.set (true);
    this.authService.save ();
  }
  
  isSaved () {
    return this.saved();
  }
}
