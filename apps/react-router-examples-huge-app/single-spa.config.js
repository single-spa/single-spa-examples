import menu from "single-spa-examples-menu";
import { defaultReactApp } from "single-spa-react";
import { appWithGlobals } from "single-spa-globals";

export const publicRoot = '/apps/react-router-examples-huge-app';
export const pathToIndex = 'index.html';
const reactApp = defaultReactApp({
    rootElementGetter: function() {
        return document.querySelector('#example');
    },
    mountApp: function() {
        if (window.renderApp) {
            window.renderApp();
        }
    }
});
export const lifecycles = [menu(), appWithGlobals(['renderApp']), reactApp];
