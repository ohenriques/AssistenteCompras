import { TestBed } from '@angular/core/testing';

import { BotaoApiService } from './botao-api.service';

describe('BotaoApiService', () => {
  let service: BotaoApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BotaoApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
