import { TestBed } from '@angular/core/testing';

import { UsergetterService } from './usergetter.service';

describe('UsergetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsergetterService = TestBed.get(UsergetterService);
    expect(service).toBeTruthy();
  });
});
