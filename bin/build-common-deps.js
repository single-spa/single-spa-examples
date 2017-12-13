const {spawn} = require('child_process');
const chalk = require('chalk');

const args = [
	"bundle",
	"react",
	"+", "react-dom",
	"+", "angular",
	"+", "common/colored-border.js",
	"+", "single-spa",
	"build/common-deps.js",
	"--source-map-contents",
	"--skip-rollup",
]

if (!process.env.SINGLE_RUN) {
	args.push("-dw")
}

const build = spawn("./node_modules/jspm/jspm.js", args)

build.stdout.on('data', data => console.log(chalk.yellow(data.toString())))
build.stderr.on('data', data => console.error(data.toString()))
build.on('close', code => {
	if (code !== 0) {
		console.error('common deps build failed with status code', code)
		process.exit(code);
	}
});
