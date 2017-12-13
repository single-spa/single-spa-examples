const {spawn} = require('child_process');
const chalk = require('chalk');
const rimraf = require('rimraf');

rimraf.sync('build/ember-app');

const processOptions = {
	cwd: './src/ember-app',
};

const build = spawn("../../node_modules/ember-cli/bin/ember", [
	"build",
	"--output-path",
	"../../build/ember-app/",
	"--environment",
	"production"
], processOptions);

build.stdout.on('data', data => console.log(chalk.gray(data.toString())))
build.stderr.on('data', data => console.error(data.toString()))
build.on('close', code => {
	if (code !== 0) {
		console.error('ember build failed with status code', code)
		process.exit(code);
	}
});
