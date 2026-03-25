import { describe, it, expect } from 'vitest';
import { generateTests } from '../src/generator.js';
import type { ParsedEndpoint } from '../src/parser.js';

const mockEndpoints: ParsedEndpoint[] = [
  {
    path: '/users/{id}',
    method: 'get',
    summary: 'Get a user by ID',
    parameters: ['id'],
    responses: ['200', '404'],
  }
];

describe('generateTests', () => {
  it('should generate vitest output', () => {
    const output = generateTests(mockEndpoints, 'vitest');
    expect(output).toContain(`import { describe, it, expect } from 'vitest'`);
    expect(output).toContain(`describe('GET /users/{id}'`);
    expect(output).toContain(`expect(response.status).toBe(200)`);
    expect(output).toContain(`expect(response.status).toBe(404)`);
  });
  
  it('should generate jest output', () => {
    const output = generateTests(mockEndpoints, 'jest');
    expect(output).toContain(`import { describe, it, expect } from '@jest/globals'`);
    expect(output).toContain(`describe('GET /users/{id}'`);
  });

  it('should generate yaml output', () => {
    const output = generateTests(mockEndpoints, 'yaml');
    expect(output).toContain('path: /users/{id}');
    expect(output).toContain('method: GET');
  });
});