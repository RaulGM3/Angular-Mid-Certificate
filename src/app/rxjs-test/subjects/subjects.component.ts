import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-subjects',
  imports: [],
  templateUrl: './subjects.component.html',
  styleUrl: './subjects.component.sass'
})
export class SubjectsComponent {
  subject = new Subject<string>();
  
  constructor () {    
    this.subject.subscribe((data) => {
      console.log("Subscriber 1 got data >>>>> "+ data);
    });
    
    this.subject.subscribe((data) => {
      console.log("Subscriber 2 got data >>>>> "+ data);
    });
    this.subject.next("Eureka");
  }
}
