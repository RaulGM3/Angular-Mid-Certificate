import { Component } from '@angular/core';
import { concatMap, delay, filter, map, of, pipe, timer } from 'rxjs';

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
    console.log ('');
    console.log ('PIPE FUNCTION');
    console.log ('');
    const squareOddVals = pipe (
      filter ((n: number) => n % 2 !== 0),
      map(n => n * n)
    );
    const squareOdd = squareOddVals(this.nums);
    // Subscribe to run the combined functions
    squareOdd.subscribe(x => console.log(x));
    // this.nums.pipe (delay (3000)).subscribe (x => console.log (x)); // esto ejecuta el observable nums después de 3 segundos.
    this.nums.pipe( // concatMap espera a que el observable anterior termine para ejecutar el siguiente. 
                    // Separa cada ocurrencia de nums en un observable independiente.
      concatMap (x => timer(1000).pipe(map(() => x))) // Retrasa cada emisión 1 segundo.
    ).subscribe(x => console.log('x', x));
     
  }
}

// of(1, 2, 3, 4, 5)
//   .pipe(
//     map(n => {
//       if (n === 4) {
//         throw 'four!';
//       }
//       return n;
//     }),
//     catchError(err => {
//       throw 'error in source. Details: ' + err;
//     })
//   )
//   .subscribe({
//     next: x => console.log(x),
//     error: err => console.log(err)
//   });