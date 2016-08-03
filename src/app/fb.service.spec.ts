/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { FBService } from './fb.service';

describe('FB Service', () => {
  beforeEachProviders(() => [FBService]);

  it('should ...',
      inject([FBService], (service: FBService) => {
    expect(service).toBeTruthy();
  }));
});
