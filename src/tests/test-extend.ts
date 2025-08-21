import { test as testBase, it as itBase } from 'vitest';
import { worker } from '../mocks/browser';

export const test = testBase.extend({
  worker: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use) => {
      await worker.start();
      await use(worker);

      worker.resetHandlers();
    },
    {
      auto: true,
    },
  ],
});

export const it = itBase.extend({
  worker: [
    // eslint-disable-next-line no-empty-pattern
    async ({}, use) => {
      await worker.start();
      await use(worker);

      worker.resetHandlers();
    },
    {
      auto: true,
    },
  ],
});
