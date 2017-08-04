import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

const App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;

let applicationInstance;

// Single-spa lifecycles.
export function bootstrap() {
	return Promise.resolve();
}

export function mount() {
	return Promise
		.resolve()
		.then(() => {
			applicationInstance = App.create({
				rootElement: '#ember-app',
			});
		})
}

export function unmount() {
	return Promise
		.resolve()
		.then(() => {
			applicationInstance.destroy();
			applicationInstance = null;
		});
}
