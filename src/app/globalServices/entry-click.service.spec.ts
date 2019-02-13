import { TestBed } from '@angular/core/testing';

import { EntryClickService } from './entry-click.service';

describe('EntryClickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EntryClickService = TestBed.get(EntryClickService);
    expect(service).toBeTruthy();
  });
});
