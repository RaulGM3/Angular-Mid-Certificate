import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-c',
  imports: [],
  templateUrl: './c.component.html',
  styleUrl: './c.component.sass'
})
export class CComponent {
  @Input() anyInput!: string;

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log(changes);
  }
}
