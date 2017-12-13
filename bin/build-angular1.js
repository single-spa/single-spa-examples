const {spawn} = require('child_process');
const chalk = require('chalk');

const args = [
	"build",
	"src/angular1/angular1.app.js",
	"-", "angular",
	"-", "common/colored-border.js",
	"build/angular1.app.js",
	"--format", "amd",
	"--source-map-contents",
	"--skip-rollup",
]

if (!process.env.SINGLE_RUN) {
	args.push("-dw")
}

const build = spawn("./node_modules/jspm/jspm.js", args)

build.stdout.on('data', data => console.log(chalk.magenta(data.toString())))
build.stderr.on('data', data => console.error(data.toString()))
build.on('close', code => {
	if (code !== 0) {
		console.error('angular1 build failed with status code', code)
		process.exit(code);
	}
});
