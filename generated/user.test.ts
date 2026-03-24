import { describe, it, expect } from 'vitest';

describe('POST /user/createWithList', () => {
  it('should return default', async () => {
    const response = await request.post('/user/createWithList');
    expect(response.status).toBe('default');
  });

});

describe('GET /user/{username}', () => {
  it('should return 200', async () => {
    const response = await request.get('/user/{username}');
    expect(response.status).toBe(200);
  });

  it('should return 400', async () => {
    const response = await request.get('/user/{username}');
    expect(response.status).toBe(400);
  });

  it('should return 404', async () => {
    const response = await request.get('/user/{username}');
    expect(response.status).toBe(404);
  });

});

describe('PUT /user/{username}', () => {
  it('should return 400', async () => {
    const response = await request.put('/user/{username}');
    expect(response.status).toBe(400);
  });

  it('should return 404', async () => {
    const response = await request.put('/user/{username}');
    expect(response.status).toBe(404);
  });

});

describe('DELETE /user/{username}', () => {
  it('should return 400', async () => {
    const response = await request.delete('/user/{username}');
    expect(response.status).toBe(400);
  });

  it('should return 404', async () => {
    const response = await request.delete('/user/{username}');
    expect(response.status).toBe(404);
  });

});

describe('GET /user/login', () => {
  it('should return 200', async () => {
    const response = await request.get('/user/login');
    expect(response.status).toBe(200);
  });

  it('should return 400', async () => {
    const response = await request.get('/user/login');
    expect(response.status).toBe(400);
  });

});

describe('GET /user/logout', () => {
  it('should return default', async () => {
    const response = await request.get('/user/logout');
    expect(response.status).toBe('default');
  });

});

describe('POST /user/createWithArray', () => {
  it('should return default', async () => {
    const response = await request.post('/user/createWithArray');
    expect(response.status).toBe('default');
  });

});

describe('POST /user', () => {
  it('should return default', async () => {
    const response = await request.post('/user');
    expect(response.status).toBe('default');
  });

});
