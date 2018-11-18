import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistic-doughnut-chart',
  templateUrl: './statistic-doughnut-chart.component.html',
  styleUrls: ['./statistic-doughnut-chart.component.css']
})
export class StatisticDoughnutChartComponent implements OnInit {
  public doughnutChartLabels: string[] = ['Education', 'Medical', 'Food', 'Others', 'Clothes'];
  public doughnutChartData: number[] = [350, 450, 100, 175, 225];
  public doughnutChartType: string = 'doughnut';

  constructor() { }

  ngOnInit() {
  }

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
