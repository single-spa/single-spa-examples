const {spawn} = require('child_process');
const chalk = require('chalk');

const args = [
	"build",
	"single-spa-examples",
	"-", "single-spa",
	"build/single-spa-examples.js",
	"--format", "amd",
	"--source-map-contents",
	"--skip-rollup",
]

if (!process.env.SINGLE_RUN) {
	args.push("-dw")
}

const build = spawn("./node_modules/jspm/jspm.js", args)

build.stdout.on('data', data => console.log(chalk.green(data.toString())));
build.stderr.on('data', data => console.error(data.toString()))
build.on('close', code => {
	if (code !== 0) {
		console.error('root application build failed with status code', code)
		process.exit(code);
	}
});
