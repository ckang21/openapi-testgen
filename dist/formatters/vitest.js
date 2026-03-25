export function formatVitest(endpoints) {
    const lines = [];
    lines.push(`import { describe, it, expect } from 'vitest';`);
    lines.push('');
    for (const endpoint of endpoints) {
        lines.push(`describe('${endpoint.method.toUpperCase()} ${endpoint.path}', () => {`);
        for (const status of endpoint.responses) {
            lines.push(`  it('should return ${status}', async () => {`);
            lines.push(`    const response = await request.${endpoint.method}('${endpoint.path}');`);
            lines.push(`    expect(response.status).toBe(${isNaN(Number(status)) ? `'${status}'` : status});`);
            lines.push(`  });`);
            lines.push('');
        }
        lines.push('});');
        lines.push('');
    }
    return lines.join('\n');
}
//# sourceMappingURL=vitest.js.map