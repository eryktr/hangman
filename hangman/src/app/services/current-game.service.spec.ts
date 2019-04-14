import { TestBed } from '@angular/core/testing';

import { CurrentGameService } from './current-game.service';

describe('CurrentGameService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurrentGameService = TestBed.get(CurrentGameService);
    expect(service).toBeTruthy();
  });
});
