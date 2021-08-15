import { TestBed } from '@angular/core/testing';

import { SlidoService } from './slido.service';

describe('SlidoService', () => {
  let service: SlidoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlidoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
