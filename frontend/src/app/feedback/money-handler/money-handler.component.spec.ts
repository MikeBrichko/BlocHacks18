import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyHandlerComponent } from './money-handler.component';

describe('MoneyHandlerComponent', () => {
  let component: MoneyHandlerComponent;
  let fixture: ComponentFixture<MoneyHandlerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyHandlerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyHandlerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
