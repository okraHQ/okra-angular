import { TestBed } from '@angular/core/testing';

import { Angular8OkraService } from './angular8-okra.service';

describe('Angular8OkraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Angular8OkraService = TestBed.get(Angular8OkraService);
    expect(service).toBeTruthy();
  });
});
