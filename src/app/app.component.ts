import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  styleUrls: ['app.component.scss'],
  template: `
    <a routerLink="/home">Home</a>
    <a routerLink="/standings">Standings</a>
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor() {}
}
