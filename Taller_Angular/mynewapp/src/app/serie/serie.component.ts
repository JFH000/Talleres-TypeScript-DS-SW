import { Component, OnInit } from '@angular/core';
import { Serie } from './Serie';
import { dataSerie } from './dataSerie';
import { SerieService } from './serie.service';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})

export class SerieComponent implements OnInit {

  constructor(private serieService: SerieService) {  }

  series: Array<Serie> = [];
  seasonAverage: Number = 0;

  getSeriesList(){
    return dataSerie;
  }
  getSeresListLink(){
    this.serieService.getSeries().subscribe(series => {
      this.series = series
      this.seasonAverage = this.getSeasonAverage(series);
    })
  }
  getSeasonAverage(series: Serie[]): Number {
    let out: number = 0;
    let acum: number = 0;
    let cont: number = 0;
    for(let serie of series){
        acum += serie.seasons;
        cont += 1;
    }
    out = acum/cont;
    return out;
}

  ngOnInit() {
    //this.series = this.getSeriesList();
    this.getSeresListLink();
    //this.seasonAverage = this.getSeasonAverage(this.series);
  }

}
