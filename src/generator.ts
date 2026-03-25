import type { ParsedEndpoint } from './parser.js';
import { formatJest } from './formatters/jest.js';
import { formatVitest } from './formatters/vitest.js';
import { formatYaml } from './formatters/yaml.js';

export function generateTests(endpoints: ParsedEndpoint[], format: string): string {
  if (format === 'jest') return formatJest(endpoints);
  if (format === 'yaml') return formatYaml(endpoints);
  return formatVitest(endpoints);
}
