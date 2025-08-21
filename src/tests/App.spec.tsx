import { expect } from 'vitest';
import { test } from './test-extend';
import { render } from 'vitest-browser-react';
import App from '../App';

test('Status', async () => {
  const screen = await render(<App />);
  const unknownButton = screen.getByRole('button', {
    name: 'status is unknown',
  });
  await expect.element(unknownButton).toBeInTheDocument();
  await unknownButton.click();
  await expect
    .element(screen.getByRole('button', { name: 'status is ok' }))
    .toBeInTheDocument();
});
