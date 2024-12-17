import { Component } from '@angular/core';
import { map, of } from 'rxjs';

@Component({
  selector: 'app-operators',
  imports: [],
  templateUrl: './operators.component.html',
  styleUrl: './operators.component.sass'
})
export class OperatorsComponent {
  nums = of(1, 2, 3, 4, 5);
  squareValues = map ((val: number) => val * val);
  squaredNums = this.squareValues (this.nums);

  constructor () {
    this.squaredNums = this.squareValues (this.nums);
    this.squaredNums.subscribe (x => console.log (x));
  }
}
