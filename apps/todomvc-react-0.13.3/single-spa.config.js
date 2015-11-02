import menu from "single-spa-examples-menu";
import { appWithGlobals } from "single-spa-globals";

export const publicRoot = '/apps/todomvc-react-0.13.3';
export const pathToIndex = 'index.html';
export const appBootstrapper = {
    applicationWasMounted: function() {
        return new Promise((resolve) => {
            if (window.render) {
                window.render();
            }
            resolve();
        });
    }
};
export const lifecycles = [menu(), appWithGlobals(['React', 'Router', 'app', 'render']), appBootstrapper];
