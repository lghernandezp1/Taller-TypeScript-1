import { Serie } from './Serie.js';
import { series } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('SeriesData')!;
const averageSeasonInf: HTMLElement = document.getElementById("AverageData")!;


renderSeriesInTable(series);

averageSeasonInf.innerHTML = `Seasons Average: ${AverageSeasons(series)}`

function renderSeriesInTable(series: Serie[]): void {

  series.forEach((serie) => {
    let tr = document.createElement("tr");
    tr.innerHTML = 
                          `<th scope="row">${serie.number}</th>
                           <td class="seriesname">${serie.title}</td>
                           <td>${serie.channel}</td>
                           <td>${serie.seasons}</td>`;
    seriesTbody.appendChild(tr);
  });
}

function AverageSeasons(series: Serie[]): number {
  let totalSeasons: number = 0;
  series.forEach((serie) => {totalSeasons = totalSeasons + serie.seasons});
  return totalSeasons/series.length;
}