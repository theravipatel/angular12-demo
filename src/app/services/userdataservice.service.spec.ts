import { TestBed } from '@angular/core/testing';

import { UserdataserviceService } from './userdataservice.service';

describe('UserdataserviceService', () => {
  let service: UserdataserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserdataserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
