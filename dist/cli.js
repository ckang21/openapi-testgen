import { Command } from 'commander';
import { parseSpec } from './parser.js';
import { generateTests } from './generator.js';
import { writeOutputFile } from './utils/fileWriter.js';
const program = new Command();
program
    .name('openapi-testgen')
    .description('Generate test stubs from an OpenAPI/ Swagger spec')
    .version('1.0.0');
program
    .command('generate <spec>')
    .description('Generate test stubs from a URL or file')
    .option('--format <format>', 'Output format: jest, vitest, or yaml', 'jest')
    .option('--out <dir>', 'Output directory', './generated')
    .action(async (spec, options) => {
    console.log(`Parsing spec: ${spec}...`);
    const endpoints = await parseSpec(spec);
    const groups = {};
    for (const endpoint of endpoints) {
        const resource = endpoint.path.split('/')[1] ?? 'root';
        if (!groups[resource])
            groups[resource] = [];
        groups[resource].push(endpoint);
    }
    for (const [resource, resourceEndpoints] of Object.entries(groups)) {
        const output = generateTests(resourceEndpoints, options.format);
        const filename = `${resource}.test.ts`;
        await writeOutputFile(options.out, filename, output);
    }
});
program.parse(process.argv);
//# sourceMappingURL=cli.js.map