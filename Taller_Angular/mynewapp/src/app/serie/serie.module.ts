import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SerieComponent } from './serie.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SerieComponent],
  exports: [SerieComponent]
})
export class SerieModule { }
