import { TestBed } from '@angular/core/testing';

import { FileStateService } from './file-state.service';

describe('FileStateService', () => {
  let service: FileStateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileStateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
