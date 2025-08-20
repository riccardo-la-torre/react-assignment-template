import { http, HttpResponse } from 'msw';

export const handlers = [
  http.get('/healthcheck', () => {
    return HttpResponse.json({ status: 'ok' });
  }),
];
