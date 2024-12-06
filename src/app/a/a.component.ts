import { afterNextRender, Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
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
  testRef = signal('Esto es una variable de a-comp y usada en un componente padre.');
  lifecycleCount = signal(['Rendered']);

  constructor () {
    afterNextRender (() => { // es como AfterViewInit
      this.lifecycleCount.update (x => [...x, 'After next render']);
    })
    afterNextRender (() => {}) // se ejecuta para programar animaciones o transiciones después del renderizado actual
  }

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
    this.testRef.set ('Sumando!');
  }
}
