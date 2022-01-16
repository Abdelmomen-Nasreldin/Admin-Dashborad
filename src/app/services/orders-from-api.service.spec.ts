import { TestBed } from '@angular/core/testing';

import { OrdersFromApiService } from './orders-from-api.service';

describe('OrdersFromApiService', () => {
  let service: OrdersFromApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdersFromApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
