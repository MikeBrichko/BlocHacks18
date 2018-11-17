import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestDetailsBioComponent } from './request-details-bio.component';

describe('RequestDetailsBioComponent', () => {
  let component: RequestDetailsBioComponent;
  let fixture: ComponentFixture<RequestDetailsBioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequestDetailsBioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequestDetailsBioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
