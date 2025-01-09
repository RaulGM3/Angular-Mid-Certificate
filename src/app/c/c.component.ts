import { Component, Input, signal, SimpleChanges } from '@angular/core';

import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-c',
  imports: [ChildComponent],
  templateUrl: './c.component.html',
  styleUrl: './c.component.sass'
})
export class CComponent {
  @Input() anyInput!: string;
  parentAge = signal (2);
  
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }
}
