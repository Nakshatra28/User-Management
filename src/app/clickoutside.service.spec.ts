import { TestBed } from '@angular/core/testing';

import { ClickoutsideService } from './clickoutside.service';

describe('ClickoutsideService', () => {
  let service: ClickoutsideService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClickoutsideService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
