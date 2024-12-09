import { Component } from '@angular/core';
import { User } from './user';
import { Vehicle } from './ClassesTest';

class Car implements Vehicle {
  id: number | string;
  color: string = 'white';
  // private color: string = 'white'; // note that this breaks the code
  wheels: number = 4;
  doors: number = 3;
  roar () {
    console.log ('brum, brum');
  }
  constructor (id: number | string, color: string, doors: number) {
    this.id = id;
    this.color = color;
    this.doors = doors;
  }
}

class Tesla extends Car {
  model: string;
  // doors: number;
  override doors = 4;
  override color = 'black';
  constructor (id: number | string, color: string, doorNumber: number, model: string) {
    super (id, color, doorNumber);
    this.model = model;
    this.roar ();
    console.log (this.wheels);
  }
}

@Component({
  selector: 'app-typescript-test',
  imports: [],
  templateUrl: './typescript-test.component.html',
  styleUrl: './typescript-test.component.sass'
})
export class TypescriptTestComponent {
  // this is for getting as parameters the same type. T is a generic type and means that T is a number, or a boolean, or a string, etc.
  // But if T is boolean, all T are boolean.
  getIndexOfAnArrayItem = <T>(array: T[], item: T): number => { 
    return array.indexOf(item);
  }
  
  // in this case, we are getting two different types as parameters. T is a type and K can be another (but can be the same as well).
  createArrayPair = <T, K> (item1: T, item2: K): [T, K] => {
    return [item1, item2];
  }

  c = <T> (val: T) => console.log ('hello', val); // cool thing that I found out.

  array = [1, 2, 3, 4, 5];
  obj = {x: 1, y: 2, z: 3};
  
  constructor () {
    let t = new Tesla (1, 'red', 4, 'Model S');
    console.log (t)

    const obj = { a: 1, b: { c: 2 } };
    const { a, b } = obj; // a is constant
    let {
      b: { c: d },
    } = obj; // d is re-assignable
    this.c (b);
    console.log (a, b, d); // 1, { c: 2 }, 2
  }

  f() {
    return [1, 2, 3, 4, 5];
  }

  ngOnInit () {
    const [a, ...rest] = this.array;
    console.log (a, rest)
    const {x: d, ...rest1} = this.obj;
    console.log (d, rest1);
    const [primero, , tercero] = this.f();
    console.log (primero, tercero);
  }

}
