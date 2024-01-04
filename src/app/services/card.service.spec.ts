import { TestBed } from '@angular/core/testing';

import { cardService } from './card.service';

describe('CardServicesService', () => {
  let service: cardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
