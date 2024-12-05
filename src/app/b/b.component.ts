import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-b',
  imports: [],
  templateUrl: './b.component.html',
  styleUrl: './b.component.sass'
})
export class BComponent {
  @Input() count!: number;
  @Output() countChange = new EventEmitter<number>();
  injectTest = inject(TestService).independencyTest;

  rest () {
    this.count --;
    this.countChange.emit (this.count);
  }
}
