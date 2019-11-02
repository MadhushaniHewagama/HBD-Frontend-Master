import { TestBed } from '@angular/core/testing';

import { HdbService } from './hdb.service';

describe('HdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HdbService = TestBed.get(HdbService);
    expect(service).toBeTruthy();
  });
});
