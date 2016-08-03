/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ConfigService } from './config.service';

describe('Config Service', () => {
  beforeEachProviders(() => [ConfigService]);

  it('should ...',
      inject([ConfigService], (service: ConfigService) => {
    expect(service).toBeTruthy();
  }));
});
