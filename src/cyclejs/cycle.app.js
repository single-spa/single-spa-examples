// most of this is copied from the good work of our dear friend @pcmnac
import {run} from '@cycle/run'
import singleSpaCycle from '@pcmnac/single-spa-cycle';
import App, {driversWithDomNode} from './cycle.root.js';

const cycleLifecycles = singleSpaCycle({
  run,
  rootComponent: App,
  drivers: driversWithDomNode(domElementGetter())
});

function domElementGetter() {
  // Make sure there is a div for us to render into
  let el = document.getElementById('cycle-app');
  if (!el) {
    el = document.createElement('div');
    el.id = 'cycle-app';
    document.body.appendChild(el);
  }
  return el;
}

export const bootstrap = [
  cycleLifecycles.bootstrap
];

export const mount = [
  cycleLifecycles.mount
];

export const unmount = [
  cycleLifecycles.unmount
];
 