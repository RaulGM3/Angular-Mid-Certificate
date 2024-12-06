import { Component, model } from '@angular/core';

@Component({
  selector: 'app-c-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.sass'
})
export class ChildComponent {
  age = model (21);

  change (ev: Event) {
    console.log (ev)
    this.age.set (parseInt ((ev.target as HTMLInputElement).value));
  }
}
