import { TestBed } from '@angular/core/testing';

import { IsNotVerifyEmailGuard } from './is-not-verify-email.guard';

describe('IsNotVerifyEmailGuard', () => {
  let guard: IsNotVerifyEmailGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsNotVerifyEmailGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
