import { describe, it, expect } from 'vitest';

describe('GET /store/inventory', () => {
  it('should return 200', async () => {
    const response = await request.get('/store/inventory');
    expect(response.status).toBe(200);
  });

});

describe('POST /store/order', () => {
  it('should return 200', async () => {
    const response = await request.post('/store/order');
    expect(response.status).toBe(200);
  });

  it('should return 400', async () => {
    const response = await request.post('/store/order');
    expect(response.status).toBe(400);
  });

});

describe('GET /store/order/{orderId}', () => {
  it('should return 200', async () => {
    const response = await request.get('/store/order/{orderId}');
    expect(response.status).toBe(200);
  });

  it('should return 400', async () => {
    const response = await request.get('/store/order/{orderId}');
    expect(response.status).toBe(400);
  });

  it('should return 404', async () => {
    const response = await request.get('/store/order/{orderId}');
    expect(response.status).toBe(404);
  });

});

describe('DELETE /store/order/{orderId}', () => {
  it('should return 400', async () => {
    const response = await request.delete('/store/order/{orderId}');
    expect(response.status).toBe(400);
  });

  it('should return 404', async () => {
    const response = await request.delete('/store/order/{orderId}');
    expect(response.status).toBe(404);
  });

});
