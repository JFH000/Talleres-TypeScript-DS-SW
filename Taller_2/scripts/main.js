import { series } from './dataSerie.js';
//import { Serie } from '../Taller_1/Serie';
var seriesTbody = document.getElementById('Series');
var seasonAverageTbody = document.getElementById('seasonAverage');
var infoTbody = document.getElementById('info');
var startLink = 'https://cors-anywhere.herokuapp.com/';
var card = document.getElementById('serie-card');
var foto = document.getElementById('serie-foto');
var name = document.getElementById('serie-name');
var info = document.getElementById('serie-info');
var link = document.getElementById('serie-link');
renderSeriesInTable(series);
var average = getSeasonAverage(series);
renderSeasonAverage(average);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (Serie) {
        var fila = document.createElement('tr');
        fila.innerHTML = "<td>".concat(Serie.id, "</td>\n                            <td><a href = \"#\" data-id=\"").concat(Serie.id, "\" class=\"name-link\">").concat(Serie.name, "</a></td>\n                            <td>").concat(Serie.platform, "</td>\n                            <td>").concat(Serie.number, "</td>");
        seriesTbody.appendChild(fila);
    });
    document.querySelectorAll('.name-link').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            var serieId = parseInt(event.target.getAttribute('data-id'));
            renderCard(serieId);
        });
    });
}
function getSeasonAverage(series) {
    var out = 0;
    var acum = 0;
    var cont = 0;
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        acum += serie.number;
        cont += 1;
    }
    out = acum / cont;
    console.log("".concat(acum));
    console.log("".concat(cont));
    console.log("".concat(out));
    return out;
}
function renderSeasonAverage(average) {
    console.log("average number: ".concat(average));
    var trElement = document.createElement("tr");
    trElement.innerHTML = "<td> Season average: ".concat(average, "</td>");
    seasonAverageTbody.appendChild(trElement);
}
function renderCard(serieId) {
    console.log("link : ".concat(serieId));
    var serie = series[serieId - 1];
    console.log("link : ".concat(serie.name));
    if (serie) {
        foto.src = serie.url_2.replace("https://i.", "https://").replace(/\.jpg$/, "");
        name.textContent = serie.name;
        info.textContent = serie.description;
        link.href = serie.url_1;
        link.textContent = serie.url_1;
        card.style.display = 'block';
    }
}
