import { TestBed } from '@angular/core/testing';

import { RealizationService } from './realization.service';

describe('RealizationService', () => {
  let service: RealizationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RealizationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
