import angular from 'angular';
import template from './gifs.template.html';

angular
.module('single-spa-app')
.component('gifs', {
  template,
  controllerAs: 'vm',
  controller($http) {
    const vm = this;

    $http
    .get('https://api.giphy.com/v1/gifs/search?q=ping+pong&api_key=dc6zaTOxFJmzC')
    .then(response => {
      vm.gifs = response.data.data;
    })
    .catch(err => {
      setTimeout(() => {
        throw err;
      }, 0)
    });
  },
});
