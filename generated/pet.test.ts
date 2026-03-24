import { describe, it, expect } from 'vitest';

describe('POST /pet/{petId}/uploadImage', () => {
  it('should return 200', async () => {
    const response = await request.post('/pet/{petId}/uploadImage');
    expect(response.status).toBe(200);
  });

});

describe('POST /pet', () => {
  it('should return 405', async () => {
    const response = await request.post('/pet');
    expect(response.status).toBe(405);
  });

});

describe('PUT /pet', () => {
  it('should return 400', async () => {
    const response = await request.put('/pet');
    expect(response.status).toBe(400);
  });

  it('should return 404', async () => {
    const response = await request.put('/pet');
    expect(response.status).toBe(404);
  });

  it('should return 405', async () => {
    const response = await request.put('/pet');
    expect(response.status).toBe(405);
  });

});

describe('GET /pet/findByStatus', () => {
  it('should return 200', async () => {
    const response = await request.get('/pet/findByStatus');
    expect(response.status).toBe(200);
  });

  it('should return 400', async () => {
    const response = await request.get('/pet/findByStatus');
    expect(response.status).toBe(400);
  });

});

describe('GET /pet/findByTags', () => {
  it('should return 200', async () => {
    const response = await request.get('/pet/findByTags');
    expect(response.status).toBe(200);
  });

  it('should return 400', async () => {
    const response = await request.get('/pet/findByTags');
    expect(response.status).toBe(400);
  });

});

describe('GET /pet/{petId}', () => {
  it('should return 200', async () => {
    const response = await request.get('/pet/{petId}');
    expect(response.status).toBe(200);
  });

  it('should return 400', async () => {
    const response = await request.get('/pet/{petId}');
    expect(response.status).toBe(400);
  });

  it('should return 404', async () => {
    const response = await request.get('/pet/{petId}');
    expect(response.status).toBe(404);
  });

});

describe('POST /pet/{petId}', () => {
  it('should return 405', async () => {
    const response = await request.post('/pet/{petId}');
    expect(response.status).toBe(405);
  });

});

describe('DELETE /pet/{petId}', () => {
  it('should return 400', async () => {
    const response = await request.delete('/pet/{petId}');
    expect(response.status).toBe(400);
  });

  it('should return 404', async () => {
    const response = await request.delete('/pet/{petId}');
    expect(response.status).toBe(404);
  });

});
