import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatisticsBarChartComponent } from './statistics-bar-chart.component';

describe('StatisticsBarChartComponent', () => {
  let component: StatisticsBarChartComponent;
  let fixture: ComponentFixture<StatisticsBarChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StatisticsBarChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticsBarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
