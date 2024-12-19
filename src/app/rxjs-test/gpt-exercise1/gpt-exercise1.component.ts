import { ChangeDetectorRef, Component, ElementRef, signal, ViewChild, } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, debounceTime, fromEvent, map, Observable, of, retry, switchMap } from 'rxjs';

class State {
  id: number;
  name: string;

  constructor () {
    this.id = 0
    this.name = '' 
  }
}

@Component({
  selector: 'app-gpt-exercise1',
  imports: [],
  templateUrl: './gpt-exercise1.component.html',
  styleUrl: './gpt-exercise1.component.sass'
})
export class GptExercise1Component {
  // The exercise is to make an input and ask a dynamic api for data.
  // needs to have a debouncetime and switchMap
  @ViewChild ('inputText') input!: ElementRef
  result = signal ('');

  constructor (private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    const a = fromEvent<KeyboardEvent>(this.input.nativeElement, 'keyup')
    .pipe(
      debounceTime (300),
      map (event => (event.target as HTMLInputElement).value),
      switchMap (val => this.callApi (val)),
      retry (3), // Reintenta hasta 3 veces (3 que ries diferentes).
      catchError (err => {
        console.error (err)
        return of(`Error final: ${err.message}`)
      })
    ).subscribe(res => {
      console.log (res)
      if (typeof res === 'object') {
        let result = res as State;
        this.result.set (result.name);
      }
      else {
        let s = res as string;
        this.result.set (s);
      }
      // this.cdr.detectChanges();
    });
  }

  callApi<State> (id: string | number): Observable<State> {
    const url = 'http://localhost:3000/api/data/' + id
    return this.http.get <State>(url);
  }
}
