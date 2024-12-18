import { TestBed } from '@angular/core/testing';

import { GetDogsService } from './get-dogs.service';

describe('GetDogsService', () => {
  let service: GetDogsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetDogsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
