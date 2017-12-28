import { TestBed, inject } from '@angular/core/testing';

import { ProspectService } from './prospect.service';

describe('ProspectService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProspectService]
    });
  });

  it('should be created', inject([ProspectService], (service: ProspectService) => {
    expect(service).toBeTruthy();
  }));
});
