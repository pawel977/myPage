import { TestBed } from '@angular/core/testing';

import { EntryChoiceService } from './entry-choice.service';

describe('EntryChoiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntryChoiceService = TestBed.get(EntryChoiceService);
    expect(service).toBeTruthy();
  });
});
