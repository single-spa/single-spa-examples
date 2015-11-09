import menu from "single-spa-examples-menu";
import { appWithGlobals } from "single-spa-globals";
import { defaultReactApp } from "single-spa-react";

export const publicRoot = '/apps/todomvc-react-0.13.3';
export const pathToIndex = 'index.html';

const reactApp = defaultReactApp({
    rootElementGetter: function() {
        return document.querySelector('.todoapp');
    },
    mountApp: function() {
        if (window.render) {
            window.render();
        }
    }
});
export const lifecycles = [menu(), appWithGlobals(['Router', 'app', 'render']), reactApp];
