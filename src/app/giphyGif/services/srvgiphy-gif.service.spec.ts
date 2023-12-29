import { TestBed } from '@angular/core/testing';

import { SrvgiphyGifService } from './srvgiphy-gif.service';

describe('SrvgiphyGifService', () => {
  let service: SrvgiphyGifService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrvgiphyGifService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
