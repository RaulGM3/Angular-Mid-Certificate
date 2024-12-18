import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { combineLatest, Observable, startWith, Subject, map, delay, debounceTime } from 'rxjs';
interface State {
  name: string;
  id: number;
}
@Component({
  selector: 'app-filter-states',
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './filter-states.component.html',
  styleUrl: './filter-states.component.sass'
})
export class FilterStatesComponent {
  stateName = '';
  states$: Observable<State []> = new Observable<State []>();
  filter: FormControl = new FormControl('');
  filteredStates$: Observable<State []> = new Observable<State []>();
  filter$: Observable<string> = new Observable<string>();
  
  constructor (private http: HttpClient) {
    // const data = from(fetch('/api/endpoint')); // not recommended. 
      // Fetch returns a promise and from makes it an observable.
      // to convert it to json we need to attach .then(res => res.json())
                  // use http instead
    this.states$ = this.http.get<State []>('http://localhost:3000/api/data');
    this.filter$ = this.filter.valueChanges.pipe(startWith(''), debounceTime (1000)); // distinctUntilChanged filters out consecutive duplicate values
    this.filteredStates$ = combineLatest([this.states$, this.filter$]).pipe(
      map(([states, filterString]) => states.filter(state => state.name.toLowerCase().indexOf(filterString.toLowerCase()) !== -1))
    );
  }


}
