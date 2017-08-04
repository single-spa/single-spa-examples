import * as singleSpa from 'single-spa';

singleSpa.declareChildApplication('navbar', () => SystemJS.import('/build/navbar.app.js'), () => true);
singleSpa.declareChildApplication('home', () => SystemJS.import('/build/home.app.js'), () => location.hash === "" || location.hash === "#");
singleSpa.declareChildApplication('angular1', () => SystemJS.import('/build/angular1.app.js'), hashPrefix('/angular1'));
singleSpa.declareChildApplication('react', () => SystemJS.import('/build/react.app.js'), hashPrefix('/react'));
singleSpa.declareChildApplication('angular2', () => SystemJS.import('/build/angular2.app.js'), hashPrefix('/angular2'));
singleSpa.declareChildApplication('vue', () => SystemJS.import('/build/vue.app.js'), hashPrefix('/vue'));
singleSpa.declareChildApplication('svelte', () => SystemJS.import('/build/svelte.app.js'), hashPrefix('/svelte'));
singleSpa.declareChildApplication('preact', () => SystemJS.import('/build/preact.app.js'), hashPrefix('/preact'));
singleSpa.declareChildApplication('iframe-vanilla-js', () => SystemJS.import('/build/vanilla.app.js'), hashPrefix('/vanilla'));
singleSpa.declareChildApplication('inferno', () => SystemJS.import('/build/inferno.app.js'), hashPrefix('/inferno'));
singleSpa.declareChildApplication('ember', () => loadEmberScript("ember-app"), hashPrefix('/ember'));

singleSpa.start();

function hashPrefix(prefix) {
    return function(location) {
        return location.hash.indexOf(`#${prefix}`) === 0;
    }
}

function loadEmberScript(appName) {
    return new Promise((resolve, reject) => {
        const scriptVendor = document.createElement('script');
        scriptVendor.src = '/build/'+appName+'/assets/vendor.js';
        scriptVendor.async = true;
        scriptVendor.onload = () => {
            const scriptEl = document.createElement('script');
            scriptEl.src = '/build/'+appName+'/assets/ember-app.js';
            scriptEl.async = true;
            scriptEl.onload = () => {
                let app;

                resolve({
                    bootstrap() {
                        return Promise.resolve();
                    },
                    mount() {
                        return Promise
                            .resolve()
                            .then(() => {
                                app = window.require(appName+'/app').default.create({
                                    rootElement: '#' + appName
                                });
                            })
                    },
                    unmount() {
                        return Promise
                            .resolve()
                            .then(() => {
                                app.destroy();
                                app = null;
                            });
                    },
                });
            }
            scriptEl.onerror = reject;
            document.head.appendChild(scriptEl);
        };

        scriptVendor.onerror = reject;
        document.head.appendChild(scriptVendor);
    });


}
