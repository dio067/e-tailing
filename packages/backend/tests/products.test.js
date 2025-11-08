import { describe, it, expect } from 'vitest';
import request from 'supertest';
import express from 'express';
import productRouter from '../routes/productsRoute.js';

const app = express();
app.use(express.json());
app.use('/api/products', productRouter);

describe('GET /api/products', () => {
  it('returns a success response', async () => {
    const res = await request(app).get('/api/products');
    expect(res.body).toHaveProperty('success');
  });
});
