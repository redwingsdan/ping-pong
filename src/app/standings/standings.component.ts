import { Component } from '@angular/core';
import 'rxjs/add/observable/interval';

@Component({
  selector: 'standings',
  styleUrls: ['standings.component.scss'],
  template: `
  <div>
    Standings Component of a list of the standings.
  </div>
  `
})
export class StandingsComponent {
  constructor() {}
}
