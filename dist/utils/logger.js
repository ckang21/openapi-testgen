import chalk from 'chalk';
import ora from 'ora';
export function startSpinner(text) {
    return ora(text).start();
}
export function success(text) {
    console.log(chalk.green('✔ ' + text));
}
export function error(text) {
    console.error(chalk.red('✖ ' + text));
}
//# sourceMappingURL=logger.js.map