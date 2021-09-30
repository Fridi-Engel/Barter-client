import { TestBed } from '@angular/core/testing';

import { ExistingServicesHttpService } from './existing-services-http.service';

describe('ExistingServicesHttpService', () => {
  let service: ExistingServicesHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExistingServicesHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
