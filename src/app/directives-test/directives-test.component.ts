import { Component } from '@angular/core';
import { HighlightDirective } from '../highlight-test.directive';
import { ConditionalHighlightDirective } from '../conditional-highlight.directive';
import { HostersDirective } from '../hosters.directive';

@Component({
  selector: 'app-directives-test',
  imports: [HighlightDirective, ConditionalHighlightDirective, HostersDirective],
  templateUrl: './directives-test.component.html',
  styleUrl: './directives-test.component.sass'
})
export class DirectivesTestComponent {
  // color = 'green';
  color = '';

  myClasses = 'blueBg whiteText';
  notActive = false;

  turnGreen () {
    // this.color = 'yellow';
    this.color='lightgreen'
    console.log ('this.color')
  }

  turnRed () {
    this.color='cyan'
    console.log ('this.color')
  }

  turnYellow () {
    this.color='yellow'
    console.log ('this.color')
  }
}
 