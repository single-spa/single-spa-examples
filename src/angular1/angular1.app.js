import singleSpaAngular1 from 'single-spa-angular1';
import angular from 'angular';
import './app.module.js';
import './routes.js';

const domElementGetter = () => document.getElementById('angular1');

const angularLifecycles = singleSpaAngular1({
	angular,
	domElementGetter,
	mainAngularModule: 'single-spa-app',
	uiRouter: true,
	preserveGlobal: true,
});

export const bootstrap = [
	angularLifecycles.bootstrap,
];

export const mount = [
	angularLifecycles.mount,
];

export const unmount = [
	angularLifecycles.unmount,
];
