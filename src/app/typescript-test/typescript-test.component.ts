import { Component } from '@angular/core';
import { User } from './user';

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

  // UTILITY TYPES
  // 
  

  

}
