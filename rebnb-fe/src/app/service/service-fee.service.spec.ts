import { TestBed } from '@angular/core/testing';

import { ServiceFeeService } from './service-fee.service';

describe('ServiceFeeService', () => {
  let service: ServiceFeeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceFeeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
