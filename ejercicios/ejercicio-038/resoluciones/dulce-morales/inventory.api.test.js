import { describe, expect, it } from 'vitest';
import request from 'supertest';
import { createApp } from './app.js';

describe('ejercicio 038', () => {
  it('valida health, busqueda y creacion', async () => {
    const app = createApp();
    await request(app).get('/health').expect(200).expect({ ok: true });
    await request(app).get('/items/1').expect(200);
    await request(app).get('/items/999').expect(404);
    await request(app).post('/items').send({ name: 'gamma', score: 30 }).expect(201);
  });
});
