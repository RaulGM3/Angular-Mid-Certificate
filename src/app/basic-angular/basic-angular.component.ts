import { afterNextRender, ChangeDetectionStrategy, Component, computed, ElementRef, signal, ViewChild, viewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import _ from 'lodash';
import { Observable } from 'rxjs';

import { BComponent } from '../b/b.component';
import { AComponent } from '../a/a.component';
import { CComponent } from '../c/c.component';
import { YoutubeButtonComponent } from '../youtube-button/youtube-button.component';
import { toObservable } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { PopupWindowComponent } from '../popup-window/popup-window.component';

@Component({
  selector: 'app-basic-angular',
  imports: [CommonModule, AComponent, BComponent, CComponent, YoutubeButtonComponent, PopupWindowComponent],
  templateUrl: './basic-angular.component.html',
  styleUrl: './basic-angular.component.sass'
})
export class BasicAngularComponent {
  title = 'test';
  renderMe = false;
  initialCount = 0;
  listClasses = 'full-width outlined';
  sectionClasses = ['expandable', 'elevated'];
  buttonClasses = {
    highlighted: true,
    embiggened: false,
  };
  
  // SIGNALS
  counter = signal<number>(0);
  doubleCount = computed(() => this.counter() * 2);
  set = signal(new Set (), {equal: _.isEqual});
  myArray = computed(() => Array.from(this.set()));
  counter$ = toObservable(this.counter);

  showPopup = false;

  anyInput = 'Any Input';
  @ViewChild ('viewChildRef') viewChildRef!: ElementRef;
  result = '';

  ngOnInit(): void {
    this.counter.set (3);
    setTimeout(() => {
      this.counter.update (x => x + 1);
    }, 2000);
  }

  render () {
    this.renderMe = true;
    this.set.update (set => set.add (this.counter ()))
    this.counter.update (x => x + 1);
  }

  monitorInput (ev: Event) {
    console.log (ev)
  }

  triggerOtherInput () {
    this.anyInput = 'Triggered Other Input';
  }

  popupClosed(event: any) {
    console.log(event);
    this.showPopup = false;
  }

  viewchildInputKD (ev: KeyboardEvent) {
    console.log (ev);
    this.result = this.viewChildRef.nativeElement.value;
    // console.log (this.viewChildRef.nativeElement.value);
  }
}
