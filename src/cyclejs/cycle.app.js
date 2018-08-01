import {run} from '@cycle/run'
import singleSpaCycle from '@pcmnac/single-spa-cycle';
import App, {driversWithDomNode} from './cycle.root.js';

const cycleLifecycles = singleSpaCycle({
  run,
  rootComponent: App,
  drivers: driversWithDomNode(
    document.getElementById('cycle-app')
  )
});

export const bootstrap = [
  cycleLifecycles.bootstrap
];

export const mount = [
  cycleLifecycles.mount
];

export const unmount = [
  cycleLifecycles.unmount
];
 