import singleSpaSvelte from 'single-spa-svelte';
import svelteComponent from './svelte.component.html';

const svelteLifecycles = singleSpaSvelte({
  component: svelteComponent,
  domElementGetter: () => document.getElementById('svelte-app'),
  data: {
    world: 'WORLD'
  }
});

export const bootstrap = [
  svelteLifecycles.bootstrap,
];

export const mount = [
  svelteLifecycles.mount,
];

export const unmount = [
  svelteLifecycles.unmount,
];
