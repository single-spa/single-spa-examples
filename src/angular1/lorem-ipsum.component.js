import angular from 'angular';
import template from './lorem-ipsum.template.html';

angular
.module('single-spa-app')
.component('loremIpsum', {
  template,
});
