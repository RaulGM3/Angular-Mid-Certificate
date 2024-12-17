import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-rxjs-test',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './rxjs-test.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./rxjs-test.component.sass']
})

export class RxjsTestComponent {
}
