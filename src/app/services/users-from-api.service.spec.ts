import { TestBed } from '@angular/core/testing';

import { UsersFromApiService } from './users-from-api.service';

describe('UsersFromApiService', () => {
  let service: UsersFromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersFromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
