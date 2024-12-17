import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-interval',
  imports: [],
  templateUrl: './interval.component.html',
  styleUrl: './interval.component.sass'
})
export class IntervalComponent {
  constructor () {
    const secondsCounter = interval(1000);
    const subscription = secondsCounter.subscribe (n => {
      console.log(`It's been ${n} seconds since subscribing!`)
      if (n === 10) subscription.unsubscribe();
    });
  }
}
