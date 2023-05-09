import { series } from './data.js';

var seriesTbody = document.getElementById('SeriesData');

var averageSeasonInf = document.getElementById("AverageData");
renderSeriesInTable(series);

function renderSeriesInTable(series) {
    
    
    
    series.forEach(function (serie) {
        var tr = document.createElement("tr");
        tr.innerHTML = "<th scope=\"row\">".concat(serie.number, 
            "</th>\n <td class=\"seriesname\">").concat(serie.title, "</td>\n <td>").concat(serie.channel, "</td>\n   <td>").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(tr);
    });


}
function AverageSeasons(series) {
    var totalSeasons = 0;
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    return totalSeasons / series.length;
    
}
averageSeasonInf.innerHTML = "Seasons Average: ".concat(AverageSeasons(series));
