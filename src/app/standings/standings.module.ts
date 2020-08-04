import { NgModule } from '@angular/core';
import { StandingsComponent } from './standings.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule],
  declarations: [
    StandingsComponent
  ],
  exports: [
    StandingsComponent
  ]
})
export class StandingsModule {}