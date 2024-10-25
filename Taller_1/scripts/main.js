import { dataSerie } from './dataSerie.js';
var seriesTbody = document.getElementById('Series');
var seasonAverageTbody = document.getElementById('seasonAverage');
renderSeriesInTable(dataSerie);
var average = getSeasonAverage(dataSerie);
renderSeasonAverage(average);
function renderSeriesInTable(series) {
    console.log('Desplegando series');
    series.forEach(function (Serie) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td scope=\"row\">".concat(Serie.id, "</td>\n                            <td>").concat(Serie.name, "</td>\n                            <td>").concat(Serie.platform, "</td>\n                            <td>").concat(Serie.number, "</td>");
        seriesTbody.appendChild(trElement);
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
