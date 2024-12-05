import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-a',
  imports: [],
  templateUrl: './a.component.html',
  styleUrl: './a.component.sass'
})
export class AComponent {
  @Input() count!: number;
  @Output() countChange = new EventEmitter<number>();
  injectTest = inject(TestService).independencyTest;
  constructor(
  ) { }

  ngOnInit(): void {
    console.log (this.injectTest ());
  }

  onClick () {
    this.injectTest.set ('testear');
    this.add ();
  }

  add () {
    this.count++;
    this.countChange.emit (this.count);
  }
}
