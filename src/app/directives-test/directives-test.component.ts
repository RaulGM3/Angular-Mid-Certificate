import { Component, input } from '@angular/core';
import { HighlightDirective } from '../highlight-test.directive';
import { ConditionalHighlightDirective } from '../conditional-highlight.directive';
import { HostersDirective } from '../hosters.directive';
import { ActivatedRoute } from '@angular/router';

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
  constructor (
    private route: ActivatedRoute
  ){}
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log ('url en directives', this.route.snapshot.url)
  }
}
 