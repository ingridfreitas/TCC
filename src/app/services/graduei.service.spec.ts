import { TestBed } from '@angular/core/testing';

import { GradueiService } from './graduei.service';

describe('GradueiService', () => {
  let service: GradueiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GradueiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
