import { TestBed } from '@angular/core/testing';

import { IsVerifyEmailGuard } from './is-verify-email.guard';

describe('IsVerifyEmailGuard', () => {
  let guard: IsVerifyEmailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsVerifyEmailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
