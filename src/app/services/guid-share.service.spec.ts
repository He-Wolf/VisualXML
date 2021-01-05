import { TestBed } from '@angular/core/testing';

import { GuidShareService } from './guid-share.service';

describe('GuidShareService', () => {
  let service: GuidShareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GuidShareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
