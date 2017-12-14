import angular from 'angular';
import './root.component.js';
import './gifs.component.js';
import './lorem-ipsum.component.js';

angular
.module('single-spa-app')
.config(($stateProvider, $locationProvider) => {
  $locationProvider.hashPrefix('');

  $locationProvider.html5Mode({
    enabled: false,
    requireBase: false,
  });

  $stateProvider
  .state('root', {
    url: '/angular1',
    template: '<root />',
  })

  .state('root.gifs', {
    url: '/gifs',
    template: '<gifs />',
  })

  .state('root.lorem-ipsum', {
    url: '/lorem-ipsum',
    template: '<lorem-ipsum />',
  })
});
