import { CurrencyPipe, DecimalPipe, PercentPipe } from '@angular/common';
import { Component, computed, signal } from '@angular/core';
import { KebabCasePipe } from '../kebab-case.pipe';
import { DynamicCasePipe } from '../dynamic-case.pipe';

@Component({
  selector: 'app-pipes',
  imports: [CurrencyPipe, PercentPipe, KebabCasePipe, DecimalPipe, DynamicCasePipe],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.sass'
})
export class PipesComponent {
  amount = signal (136.45);
  tax = computed (() => this.amount () * 0.07)
  tipPercentage = 0.15;
  tip = computed (() => this.amount () * this.tipPercentage);
  total = computed (() => this.amount () - this.tax () - this.tip ());
  randomNumber = 1234.1345;
  myName = 'Raul Garafulic';
  format = '';
}
