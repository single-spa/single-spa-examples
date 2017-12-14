import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import navbar from './navbar.component.js';

/* The navbar app is an app that is always active and is responsible for showing the top navbar.
 * It is written in React and does not even use a router like react-router since it doesn't really
 * care about what the url is -- it just shows the menu items regardless. If we wanted to have an active
 * state for the menu item that is active, then we would need to either add in a hashchange listener or
 * a router like react-router.
 *
 * This app runs concurrently with any and all apps that are also active. It resides in its own <div>
 * and renders its content fixed to the page.
 *
 * This app is intended to show how simple a single-spa application can be.
 */

const reactLifecyles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: navbar,
});

export const bootstrap = [
  reactLifecyles.bootstrap,
];

export const mount = [
  reactLifecyles.mount,
];

export const unmount = [
  reactLifecyles.unmount,
];

function domElementGetter() {
  return document.getElementById("navbar");
}
