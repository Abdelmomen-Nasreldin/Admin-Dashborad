import { Component, OnInit } from '@angular/core';
import { DashboardOneService } from 'src/app/services/dashboard-one.service';

import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';
// import DashboardOneService from './'
import { yearlyConsumption } from './../../../../../services/dashboard-one.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  Highcharts = Highcharts;
  chartOptionsConsumption = {};
  chartYearlyConsumption = {};
  cards: number[];
  loading: boolean = true;

  constructor(private firstDashboard: DashboardOneService) {
    this.chartYearlyConsumption = yearlyConsumption;

    this.cards = [71, 78, 39, 66];
  }
  ngOnInit(): void {
    this.firstDashboard.getSettings().subscribe({
      next: (options) => {
        this.chartOptionsConsumption = options.optionsConsumption;
        this.loading = false;
      },
      error: (err) => {
        console.log(err);
        this.loading = false;
      },
    });
    // this.chartOptionsConsumption = this.firstDashboard.optionsConsumption

    HC_exporting(Highcharts);
  }
}
