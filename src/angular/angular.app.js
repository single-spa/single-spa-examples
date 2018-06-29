import 'zone.js';
import 'reflect-metadata';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import singleSpaAngular from 'single-spa-angular';
import mainModule from './main-module.ts';

const ngLifecycles = singleSpaAngular({
  domElementGetter,
  mainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<example-ng2-app />`,
})

export const bootstrap = [
  ngLifecycles.bootstrap,
];

export const mount = [
  ngLifecycles.mount,
];

export const unmount = [
  ngLifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById('angular');
}
