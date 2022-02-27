import { TestBed } from '@angular/core/testing';

import { StatParRegionService } from './stat-par-region.service';

describe('StatParRegionService', () => {
  let service: StatParRegionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StatParRegionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
