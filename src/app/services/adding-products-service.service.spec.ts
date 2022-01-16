import { TestBed } from '@angular/core/testing';

import { AddingProductsServiceService } from './adding-products-service.service';

describe('AddingProductsServiceService', () => {
  let service: AddingProductsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddingProductsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
