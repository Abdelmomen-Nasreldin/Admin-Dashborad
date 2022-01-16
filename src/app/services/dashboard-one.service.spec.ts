import { TestBed } from '@angular/core/testing';

import { DashboardOneService } from './dashboard-one.service';

describe('DashboardOneService', () => {
  let service: DashboardOneService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DashboardOneService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
