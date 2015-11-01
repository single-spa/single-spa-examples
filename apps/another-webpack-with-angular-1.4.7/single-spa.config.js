import { defaultAngular1App } from "single-spa-angular1";
import singleSpaExamplesMenu from "single-spa-examples-menu";

export const publicRoot = '/apps/another-webpack-with-angular-1.4.7';
export const pathToIndex = 'index.html';

const angular1App = defaultAngular1App({
    publicRoot: publicRoot,
    rootAngularModule: 'root-angular-module',
    rootElementGetter: () => document.querySelector('#app-root')
});

export const lifecycles = [singleSpaExamplesMenu(), angular1App];
