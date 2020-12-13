import { TestBed } from '@angular/core/testing';

import { XmlProcessorService } from './xml-processor.service';

describe('XmlProcessorService', () => {
  let service: XmlProcessorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(XmlProcessorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
