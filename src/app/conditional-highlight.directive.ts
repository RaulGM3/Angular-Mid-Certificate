import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appConditionalHighlight]'
})
export class ConditionalHighlightDirective {
  @Input() appConditionalHighlight!: string;
  @Input() defaultColor = 'red';

  constructor(
    private el: ElementRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    console.log (this.appConditionalHighlight)
    this.highlight(this.appConditionalHighlight || this.defaultColor || 'red');
  }

  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  @HostListener ('click') onClick () {
    this.el.nativeElement.style.color = 'transparent';
  }

  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('color', this.appConditionalHighlight);
  }
}
