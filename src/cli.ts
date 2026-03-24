import { Command } from 'commander';
import { parseSpec } from './parser.js';
import { generateTests } from './generator.js';

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
        const output = generateTests(endpoints, options.format);
        console.log(output);
    });

program.parse(process.argv);