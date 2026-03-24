export function generateTests(endpoints, format) {
    const lines = [];
    const importLine = format === 'jest'
        ? `import { describe, it, expect } from '@jest/globals';`
        : `import { describe, it, expect } from 'vitest';`;
    lines.push(importLine);
    lines.push('');
    for (const endpoint of endpoints) {
        lines.push(`describe('${endpoint.method.toUpperCase()} ${endpoint.path}', () => {`);
        for (const status of endpoint.responses) {
            lines.push(`  it('should return ${status}', async () => {`);
            lines.push(`    const response = await request.${endpoint.method}('${endpoint.path}');`);
            lines.push(`    expect(response.status).toBe(${status});`);
            lines.push(`  });`);
            lines.push('');
        }
    }
    lines.push('});');
    lines.push('');
    return lines.join('\n');
}
//# sourceMappingURL=generator.js.map