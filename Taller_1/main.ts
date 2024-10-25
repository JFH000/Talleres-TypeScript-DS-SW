import { Serie } from './Serie.js';

import { dataSerie } from './dataSerie.js';

let seriesTbody: HTMLElement = document.getElementById('Series')!;
let seasonAverageTbody: HTMLElement = document.getElementById('seasonAverage')!;

renderSeriesInTable(dataSerie);
let average: number = getSeasonAverage(dataSerie);
renderSeasonAverage(average);

function renderSeriesInTable(series: Serie[]): void {

    console.log('Desplegando series');
    series.forEach((Serie) => {
    let trElement = document.createElement("tr");
    trElement.innerHTML =  `<td scope="row">${Serie.id}</td>
                            <td>${Serie.name}</td>
                            <td>${Serie.platform}</td>
                            <td>${Serie.number}</td>`;

    seriesTbody.appendChild(trElement);
    });
}

function getSeasonAverage(series: Serie[]): number{

    let out: number = 0;
    let acum: number = 0;
    let cont: number = 0;

    for(let serie of series){
        acum += serie.number;
        cont += 1;
    }
    out = acum/cont;

    console.log(`${acum}`);
    console.log(`${cont}`);
    console.log(`${out}`);

    return out;
}

function renderSeasonAverage(average: number){

    console.log(`average number: ${average}`)
    let trElement = document.createElement("tr");
    trElement.innerHTML =  `<td> Season average: ${average}</td>`
    seasonAverageTbody.appendChild(trElement);

}
