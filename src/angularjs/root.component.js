import angular from 'angular';
import template from './root.template.html';
import {showFrameworkObservable, getBorder} from '../common/colored-border.js';

angular
.module('single-spa-app')
.component('root', {
  template,
  controllerAs: 'vm',
  controller($timeout) {
    const vm = this;

    vm.frameworkInspector = false;
    vm.styles = {};

    let subscription;

    vm.$onInit = () => {
      subscription = showFrameworkObservable.subscribe(
        frameworkInspector => {
          $timeout(() => {
            vm.styles = frameworkInspector ? {border: getBorder('angularjs')} : {};
            vm.frameworkInspector = frameworkInspector;
          });
        }
      );
    };

    vm.$onDestroy = () => {
      subscription.dispose();
    }
  }
})
