import * as singleSpa from 'single-spa';

singleSpa.declareChildApplication('navbar', () => SystemJS.import('/build/navbar.app.js'), () => true);
singleSpa.declareChildApplication('home', () => SystemJS.import('/build/home.app.js'), () => location.hash === "" || location.hash === "#");
singleSpa.declareChildApplication('angular1', () => SystemJS.import('/build/angular1.app.js'), hashPrefix('/angular1'));
singleSpa.declareChildApplication('react', () => SystemJS.import('/build/react.app.js'), hashPrefix('/react'));
singleSpa.declareChildApplication('angular2', () => SystemJS.import('/build/angular2.app.js'), hashPrefix('/angular2'));

singleSpa.start();

function hashPrefix(prefix) {
	return function() {
		return window.location.hash.indexOf(`#${prefix}`) === 0;
	}
}
