import { TestBed } from '@angular/core/testing';

import { AdApiService } from './ad-api.service';

describe('AdApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdApiService = TestBed.get(AdApiService);
    expect(service).toBeTruthy();
  });
});
