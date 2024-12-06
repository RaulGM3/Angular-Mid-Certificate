import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter, ViewChild, ElementRef, ContentChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-popup-window',
  imports: [CommonModule],
  templateUrl: './popup-window.component.html',
  styleUrl: './popup-window.component.sass'
})
export class PopupWindowComponent {
  @Input()
  isOpen = false;

  @Input()
  title = 'Title';

  @ContentChild ('text') text!: ElementRef;

  @Output() onClose = new EventEmitter<string>();
  @ViewChild('content') content!: ElementRef;

  closePopup(): void {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    // console.log ('text', this.text?.nativeElement); // this will be undefined because the content is not yet rendered
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log ('text', this.text?.nativeElement); // this will be undefined untill the content is rendered
    
  }
}
