import { TestBed } from '@angular/core/testing';

import { HangmanServiceService } from './hangman-service.service';

describe('HangmanServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HangmanServiceService = TestBed.get(HangmanServiceService);
    expect(service).toBeTruthy();
  });
});
