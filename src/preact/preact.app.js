import preact from 'preact';
import rootComponent from './App.js';
import singleSpaPreact from 'single-spa-preact';

const preactLifecycles = singleSpaPreact({
  preact,
  rootComponent,
  domElementGetter() {
    return document.getElementById("preact-app")
  },
});

export const bootstrap = [
  preactLifecycles.bootstrap,
];

export const mount = [
  preactLifecycles.mount,
];

export const unmount = [
  preactLifecycles.unmount,
];
