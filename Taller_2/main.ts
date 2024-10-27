import { Serie } from './Serie.js';

import { series } from './dataSerie.js';
//import { Serie } from '../Taller_1/Serie';

let seriesTbody: HTMLElement = document.getElementById('Series')!;
let seasonAverageTbody: HTMLElement = document.getElementById('seasonAverage')!;
let infoTbody: HTMLElement = document.getElementById('info')!;

let startLink = 'https://cors-anywhere.herokuapp.com/';

const card = document.getElementById('serie-card') as HTMLElement;
const foto = document.getElementById('serie-foto') as HTMLImageElement;
const name = document.getElementById('serie-name') as HTMLElement;
const info = document.getElementById('serie-info') as HTMLElement;
const link = document.getElementById('serie-link') as HTMLAnchorElement;

renderSeriesInTable(series);
let average: number = getSeasonAverage(series);
renderSeasonAverage(average);

function renderSeriesInTable(series: Serie[]): void {

    console.log('Desplegando series');
    series.forEach(Serie => {
        const fila = document.createElement('tr');
        fila.innerHTML =   `<td>${Serie.id}</td>
                            <td><a href = "#" data-id="${Serie.id}" class="name-link">${Serie.name}</a></td>
                            <td>${Serie.platform}</td>
                            <td>${Serie.number}</td>`;
        seriesTbody.appendChild(fila);
    });

    document.querySelectorAll('.name-link').forEach(link => {
        link.addEventListener('click', (event) =>{
            event.preventDefault();
            const serieId = parseInt((event.target as HTMLElement).getAttribute('data-id')!);
            
            renderCard(serieId);
        });
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

function renderCard(serieId:number){
    console.log(`link : ${serieId}`)
    const serie = series[serieId-1];
    console.log(`link : ${serie.name}`);
    if(serie){
        foto.src = serie.url_2.replace("https://i.", "https://").replace(/\.jpg$/, "");
        name.textContent = serie.name;
        info.textContent = serie.description;
        link.href = serie.url_1
        link.textContent = serie.url_1;
        card.style.display = 'block'
    }
}

