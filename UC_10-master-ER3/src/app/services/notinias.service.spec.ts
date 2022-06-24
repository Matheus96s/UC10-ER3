import { TestBed } from '@angular/core/testing';

import { NotiniasService } from './notinias.service';

describe('NotiniasService', () => {
  let service: NotiniasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotiniasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
