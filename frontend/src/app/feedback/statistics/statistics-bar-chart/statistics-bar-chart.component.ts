import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statistics-bar-chart',
  templateUrl: './statistics-bar-chart.component.html',
  styleUrls: ['./statistics-bar-chart.component.css']
})
export class StatisticsBarChartComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['Education', 'Medical', 'Food', 'CLothes', 'Others'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Contribution Percentage'},
  ];

  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  public randomize(): void {
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }
  constructor() { }

  ngOnInit() {
  }

}
