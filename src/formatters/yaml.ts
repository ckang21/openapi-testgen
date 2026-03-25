import type { ParsedEndpoint } from "../parser.js";

export function formatYaml(endpoints: ParsedEndpoint[]): string {
    const lines: string[] = [];
    for (const endpoint of endpoints) {
        lines.push(`- path: ${endpoint.path}`);
        lines.push(`  method: ${endpoint.method.toUpperCase()}`);
        lines.push(`  summary: ${endpoint.summary || 'N/A'}`);
        lines.push(`  responses: [${endpoint.responses.join(', ')}]`);
        lines.push('');
    }
    return lines.join('\n');
}