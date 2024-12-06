import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

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

  @Output() onClose = new EventEmitter<string>();

  closePopup(): void {
    this.isOpen = false;
    this.onClose.emit('Pop-up window closed');
  }
}
