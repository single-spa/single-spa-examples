import { declareChildApplication } from "single-spa";

declareChildApplication('/apps/jspm-with-angular-1.3.0/single-spa.config.js', () => window.location.pathname.indexOf('/legacy') === 0);
declareChildApplication('/apps/jspm-with-angular-1.4.6/single-spa.config.js', () => window.location.pathname.indexOf('/v2') === 0);
declareChildApplication('/apps/bower-angular-phonecat/single-spa.config.js', () => window.location.pathname.indexOf('/phonecat') === 0);
declareChildApplication('/apps/webpack-with-angular-1.4.7/single-spa.config.js', () => window.location.pathname.indexOf('/webpack1') === 0);
declareChildApplication('/apps/another-webpack-with-angular-1.4.7/single-spa.config.js', () => window.location.pathname.indexOf('/webpack2') === 0);
declareChildApplication('/apps/todomvc-react-0.13.3/single-spa.config.js', () => window.location.pathname.indexOf('/todomvc-react') === 0);
declareChildApplication('/apps/react-router-examples-huge-app/single-spa.config.js', () => window.location.pathname.indexOf('/react-router-huge-app') === 0);
