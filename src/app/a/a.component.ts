import { Component, inject } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-a',
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.sass'
})
export class AComponent {
  injectTest = inject(TestService).independencyTest;
  constructor(
  ) { }

  ngOnInit(): void {
    console.log (this.injectTest ());
  }

  onClick () {
    this.injectTest.set ('testear');
  }
}
