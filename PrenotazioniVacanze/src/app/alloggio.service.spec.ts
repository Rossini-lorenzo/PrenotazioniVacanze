import { TestBed } from '@angular/core/testing';

import { AlloggioService } from './alloggio.service';

describe('AlloggioService', () => {
  let service: AlloggioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlloggioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
