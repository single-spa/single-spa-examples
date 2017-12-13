process.env.SINGLE_RUN = true;

const rimraf = require('rimraf');
const mkdirp = require('mkdirp');
const cpx = require('cpx');

rimraf.sync('build');
mkdirp.sync('build');
cpx.copySync('jspm_packages/system.src.js', 'build');
cpx.copySync('jspm_packages/system-polyfills.src.js', 'build');

require('./build-root.js');
require('./build-common-deps.js');
require('./build-home.js');
require('./build-angular1.js');
require('./build-angular2.js');
require('./build-ember.js');
require('./build-inferno.js');
require('./build-navbar.js');
require('./build-preact.js');
require('./build-react.js');
require('./build-svelte.js');
require('./build-vanilla.js');
require('./build-vue.js');
