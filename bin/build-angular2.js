const {spawn} = require('child_process');
const chalk = require('chalk');

const args = [
	"build",
	"src/angular2/angular2.app.js",
	"-", "common/colored-border.js",
	"build/angular2.app.js",
	"--format", "amd",
	"--source-map-contents",
	"--skip-rollup",
]

if (!process.env.SINGLE_RUN) {
	args.push("-dw")
}

const build = spawn("./node_modules/jspm/jspm.js", args)

build.stdout.on('data', data => console.log(chalk.cyan(data.toString())))
build.stderr.on('data', data => console.error(data.toString()))
build.on('close', code => {
	if (code !== 0) {
		console.error('angular2 build failed with status code', code)
		process.exit(code);
	}
});
