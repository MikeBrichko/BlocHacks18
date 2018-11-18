import { TestBed } from '@angular/core/testing';

import { RequestgetterService } from './requestgetter.service';

describe('RequestgetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RequestgetterService = TestBed.get(RequestgetterService);
    expect(service).toBeTruthy();
  });
});
