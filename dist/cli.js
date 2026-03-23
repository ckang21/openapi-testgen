import { Command } from 'commander';
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
    .action((spec, options) => {
    console.log('Spec:', spec);
    console.log('Format:', options.format);
    console.log('Output:', options.out);
});
program.parse(process.argv);
//# sourceMappingURL=cli.js.map