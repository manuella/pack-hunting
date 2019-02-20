import { TestBed } from '@angular/core/testing';

import { AuthSessionService } from './auth-session.service';

describe('AuthSessionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthSessionService = TestBed.get(AuthSessionService);
    expect(service).toBeTruthy();
  });

  it('should save and read account id', () =>{
    const service: AuthSessionService = TestBed.get(AuthSessionService);
    let accountId = 123;
    service.AssignSession(accountId);
    expect(service.GetSession().toBe(accountId));
  })
});
