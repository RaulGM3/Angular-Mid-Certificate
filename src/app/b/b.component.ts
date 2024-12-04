import { Component, inject } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.sass'
})
export class BComponent {

  injectTest = inject(TestService).independencyTest;

}
