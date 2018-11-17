import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsContentComponent } from './request-details-content.component';

describe('RequestDetailsContentComponent', () => {
  let component: RequestDetailsContentComponent;
  let fixture: ComponentFixture<RequestDetailsContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailsContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailsContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
