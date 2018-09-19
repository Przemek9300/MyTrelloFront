import { TestBed, inject } from '@angular/core/testing';

import { ApiSerivceService } from './api-serivce.service';

describe('ApiSerivceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiSerivceService]
    });
  });

  it('should be created', inject([ApiSerivceService], (service: ApiSerivceService) => {
    expect(service).toBeTruthy();
  }));
});
