import angular from "angular";
import "angular-route";

angular.module('root-angular-module', [
    'ngRoute'
])
.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider
        .when('/view1', {
            template: '<h4>I am view 1 (webpack1)</h4>'
        })
        .when('/view2', {
            template: '<h4>I am view 2 (webpack1)</h4>'
        })
    }]);

angular.bootstrap(document.getElementById('app-root'), ['root-angular-module']);
