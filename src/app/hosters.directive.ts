import { Directive, Host, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHosters]'
})
export class HostersDirective {
  @HostBinding('class') myClasses = 'These are the directive classes';
  @HostBinding('disabled') notActive = true;

  constructor() { }

  ngAfterViewChecked(): void {
    console.log ('myclasses', this.myClasses)
    console.log ('notActive', this.notActive)
  }
}
