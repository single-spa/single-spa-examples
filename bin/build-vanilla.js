const {spawn} = require('child_process');
const chalk = require('chalk');
const rimraf = require('rimraf');
const cpx = require('cpx');

rimraf.sync('build/vanillajs');
cpx.copySync('src/vanillajs/**', 'build/vanillajs')

const args = [
	"build",
	"src/vanillajs/vanilla.app.js",
	"-", "common/colored-border.js",
	"build/vanilla.app.js",
	"--format", "amd",
	"--source-map-contents",
	"--skip-rollup",
]

if (!process.env.SINGLE_RUN) {
	args.push("-dw")
}

const build = spawn("./node_modules/jspm/jspm.js", args)

build.stdout.on('data', data => console.log(chalk.green.bold(data.toString())))
build.stderr.on('data', data => console.error(data.toString()))
build.on('close', code => {
	if (code !== 0) {
		console.error('vanillajs build failed with status code', code)
		process.exit(code);
	}
});
