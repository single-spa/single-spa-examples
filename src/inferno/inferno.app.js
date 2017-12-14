import Inferno from 'inferno';
import createElement from 'inferno-create-element';
import singleSpaInferno from 'single-spa-inferno';
import rootComponent from './root.component.js';

const infernoLifecycles = singleSpaInferno({
  Inferno,
  createElement,
  rootComponent,
  domElementGetter: () => document.getElementById('inferno-app')
});

export const bootstrap = [
  infernoLifecycles.bootstrap,
];

export const mount = [
  infernoLifecycles.mount,
];

export const unmount = [
  infernoLifecycles.unmount,
];
