import { TestBed } from '@angular/core/testing';

import { HangmanService } from './hangman-service.service';

describe('HangmanServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HangmanService = TestBed.get(HangmanService);
    expect(service).toBeTruthy();
  });
});
