const {spawn} = require('child_process');
const chalk = require('chalk');

const args = [
	"--config",
	"src/react/webpack.config.js",
];

if (!process.env.SINGLE_RUN) {
	args.push("-w")
}

const build = spawn("./node_modules/webpack/bin/webpack.js", args)

build.stdout.on('data', data => console.log(chalk.magenta.underline(data.toString())))
build.stderr.on('data', data => console.error(data.toString()))
build.on('close', code => {
	if (code !== 0) {
		console.error('react build failed with status code', code)
		process.exit(code);
	}
});
