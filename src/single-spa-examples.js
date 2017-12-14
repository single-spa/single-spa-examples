import {declareChildApplication, start} from 'single-spa';
import {loadEmberApp} from 'single-spa-ember';
import 'babel-polyfill';

declareChildApplication('navbar', () => import('./navbar/navbar.app.js'), () => true);
declareChildApplication('home', () => import('./home/home.app.js'), () => location.hash === "" || location.hash === "#");
declareChildApplication('angular1', () => import('./angular1/angular1.app.js'), hashPrefix('/angular1'));
declareChildApplication('react', () => import('./react/react.app.js'), hashPrefix('/react'));
declareChildApplication('angular2', () => import('./angular2/angular2.app.js'), hashPrefix('/angular2'));
declareChildApplication('vue', () => import('src/vue/vue.app.js'), hashPrefix('/vue'));
declareChildApplication('svelte', () => import('src/svelte/svelte.app.js'), hashPrefix('/svelte'));
declareChildApplication('preact', () => import('src/preact/preact.app.js'), hashPrefix('/preact'));
declareChildApplication('iframe-vanilla-js', () => import('src/vanillajs/vanilla.app.js'), hashPrefix('/vanilla'));
declareChildApplication('inferno', () => import('src/inferno/inferno.app.js'), hashPrefix('/inferno'));
declareChildApplication('ember', () => loadEmberApp("ember-app", '/build/ember-app/assets/ember-app.js', '/build/ember-app/assets/vendor.js'), hashPrefix('/ember'));

start();

function hashPrefix(prefix) {
    return function(location) {
        return location.hash.indexOf(`#${prefix}`) === 0;
    }
}
