import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  independencyTest = signal('test');

  constructor() { }
}
