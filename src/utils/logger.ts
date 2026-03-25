import chalk from 'chalk';
import ora from 'ora';

export function startSpinner(text: string) {
    return ora(text).start();
}

export function success(text: string) {
    console.log(chalk.green('✔ ' + text));
}

export function error(text: string) {
    console.error(chalk.red('✖ ' + text));
}