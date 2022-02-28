import { TestBed } from '@angular/core/testing';

import { CalculePrimoDivisorServiceService } from './calcule-primo-divisor-service.service';

describe('CalculePrimoDivisorServiceService', () => {
  let service: CalculePrimoDivisorServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculePrimoDivisorServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
