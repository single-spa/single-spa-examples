import angular from 'angular';
import './base.component.js';
import './gifs.component.js';
import './lorem-ipsum.component.js';

angular
.module('single-spa-app')
.config(($stateProvider, $locationProvider) => {
	$locationProvider.html5Mode({
		enabled: false,
		requireBase: false,
	});

	$stateProvider
	.state('base', {
		url: '/angular1',
		template: '<base />',
	})

	.state('base.gifs', {
		url: '/gifs',
		template: '<gifs />',
	})

	.state('base.lorem-ipsum', {
		url: '/lorem-ipsum',
		template: '<lorem-ipsum />',
	})
});
