import angular from 'angular';
import template from './base.template.html';

angular
.module('single-spa-app')
.component('base', {
	template,
	controllerAs: 'vm',
	controller() {
		const vm = this;
	}
})
