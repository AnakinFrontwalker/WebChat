/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { ChatSocketService } from './chat-socket.service';

describe('ChatSocket Service', () => {
  beforeEachProviders(() => [ChatSocketService]);

  it('should ...',
      inject([ChatSocketService], (service: ChatSocketService) => {
    expect(service).toBeTruthy();
  }));
});
