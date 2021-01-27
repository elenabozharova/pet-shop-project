import { TestBed } from '@angular/core/testing';

import { PetshopsService } from './petshops.service';

describe('PetshopsService', () => {
  let service: PetshopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetshopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
