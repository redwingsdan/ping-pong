import { Component } from '@angular/core';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'home',
  styleUrls: ['home.component.scss'],
  template: `
  <div>
    Home Component with a summary of things to come.
  </div>
  `
})
export class HomeComponent {
  constructor() {}
}
