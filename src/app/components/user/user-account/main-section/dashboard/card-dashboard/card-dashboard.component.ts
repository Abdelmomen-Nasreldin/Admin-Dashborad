import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
@Component({
  selector: 'app-card-dashboard',
  templateUrl: './card-dashboard.component.html',
  styleUrls: ['./card-dashboard.component.scss']
})
export class CardDashboardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptions = {};
  cards: number[]
  // Highcharts: typeof Highcharts = Highcharts;
  // chartOptions: Highcharts.Options
  // = {
  //   series: [{
  //     data: [1, 2, 3,4, 5],
  //     type: 'pie'
  //   }]}

  constructor() {
    this.cards = [71, 78, 39, 66];
  }
  // cards() {
  //   return [71, 78, 39, 66];
  // }
  ngOnInit(): void {
    this.chartOptions = {
      // /////////////////////////////////////////
      chart: {
        type: 'area'
    },
    title: {
        text: 'Historic and Estimated Worldwide Population Growth by Region'
    },
    subtitle: {
        text: 'Source: Wikipedia.org'
    },
    xAxis: {
        categories: ['1750', '1800', '1850', '1900', '1950', '1999', '2050'],
        tickmarkPlacement: 'on',
        title: {
            enabled: false
        }
    },
    yAxis: {
        title: {
            text: 'Billions'
        },
        labels: {
            // formatter: function () {
            //     return this.value / 1000;
            // }
        }
    },
    tooltip: {
        split: true,
        valueSuffix: ' millions'
    },
    plotOptions: {
        area: {
            stacking: 'normal',
            lineColor: '#666666',
            lineWidth: 1,
            marker: {
                lineWidth: 1,
                lineColor: '#666666'
            }
        }
    },
    series: [{
        name: 'Asia',
        data: [502, 635, 809, 947, 1402, 3634, 5268]
    },
    // {
    //     name: 'Africa',
    //     data: [106, 107, 111, 133, 221, 767, 1766]
    // }, {
    //     name: 'Europe',
    //     data: [163, 203, 276, 408, 547, 729, 628]
    // }, {
    //     name: 'America',
    //     data: [18, 31, 54, 156, 339, 818, 1201]
    // }, {
    //     name: 'Oceania',
    //     data: [2, 2, 2, 6, 13, 30, 46]
    // }
  ]
    };
    HC_exporting(Highcharts);
  }
}
