const {spawn} = require('child_process');
const chalk = require('chalk');

const compile = spawn('./node_modules/svelte-cli/bin.js', [
	"compile",
	"src/svelte/svelte.component.html",
	"-n", "Svelte",
	"-o", "src/svelte/svelte.component.js",
]);
compile.stdout.on('data', data => console.log(chalk.cyan.underline(data.toString())))
compile.stderr.on('data', data => console.error(data.toString()))
compile.on('close', code => {
	if (code !== 0) {
		console.error('angular1 build failed with status code', code)
		process.exit(code);
	} else {
		const buildArgs = [
			"build",
			"src/svelte/svelte.app.js",
			"-", "common/colored-border.js",
			"build/svelte.app.js",
			"--format", "amd",
			"--source-map-contents",
			"--skip-rollup",
		];

		const build = spawn("./node_modules/jspm/jspm.js", buildArgs)

		build.stdout.on('data', data => console.log(chalk.cyan.underline(data.toString())))
		build.stderr.on('data', data => console.error(data.toString()))
		build.on('close', code => {
			if (code !== 0) {
				console.error('angular1 build failed with status code', code)
				process.exit(code);
			}
		});
	}
});
