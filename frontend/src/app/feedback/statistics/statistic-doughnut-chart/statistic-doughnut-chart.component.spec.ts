import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticDoughnutChartComponent } from './statistic-doughnut-chart.component';

describe('StatisticDoughnutChartComponent', () => {
  let component: StatisticDoughnutChartComponent;
  let fixture: ComponentFixture<StatisticDoughnutChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticDoughnutChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticDoughnutChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
