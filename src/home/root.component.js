import React from 'react';
import Technology from './technology.component.js';
import Walkthroughs from './walkthroughs.component.js';
import {getBorder, showFrameworkObservable} from 'common/colored-border.js';

export default class HomeRoot extends React.Component {
	constructor() {
		super();
		this.state = {
			frameworkInspector: false,
		};
	}
	componentWillMount() {
		this.subscription = showFrameworkObservable.subscribe(newValue => this.setState({frameworkInspector: newValue}));
	}
	render() {
		return (
			<div style={this.state.frameworkInspector ? {border: getBorder('react')} : {}}>
				{this.state.frameworkInspector &&
					<div>(built with React)</div>
				}
				<div className="container">
					<div className="row">
						<h4 className="light">
							Introduction
						</h4>
						<p className="caption">
							Single-spa is a javascript libary that allows for many small applications to coexist in one single page application.
							This website is a demo application that shows off what single-spa can do.
							For more information about single-spa, go to the <a href="https://github.com/CanopyTax/single-spa" target="_blank">single-spa Github page</a>.
							Additionally, this website's code can be found at the <a href="https://github.com/CanopyTax/single-spa-examples" target="_blank">single-spa-examples Github</a>.
							While you're here, check out the following features:
						</p>
						<Walkthroughs />
					</div>
					<div className="row">
						<h4 className="light">
							Framework examples
						</h4>
						<p className="caption">
							Single-spa allows for multiple frameworks to coexist in the same single page application.
						</p>
						<div className="row">
							<Technology
								imgSrc="https://facebook.github.io/react/img/logo.svg"
								imgBackgroundColor="#222222"
								cardTitle="React"
								href="/#/react"
								explanation={`Yep we've got a React example. We actually just borrowed it from the react-router examples, to show how easy it is to migrate an existing app into single-spa`}
							/>
							<Technology
								imgSrc="https://angularjs.org/img/ng-logo.png"
								cardTitle="Angular 1"
								href="/#/angular1"
								explanation={`Angular 1 has some quirks, but works just fine when you use the single-spa-angular1 npm library to help you set up your app`}
							/>
							<Technology
								imgSrc="https://angular.io/resources/images/logos/angular2/angular.svg"
								imgBackgroundColor="#1976D2"
								cardTitle="Angular 2"
								href="/#/angular2"
								explanation={`Angular 2 is compatible with single-spa, check out a simple 'Hello World' in the example.`}
							/>
							<Technology
								imgSrc="https://vuejs.org/images/logo.png"
								cardTitle="Vue.js"
								href="/#/vue"
								explanation={`Vue.js is compatible with single-spa. Easily get started with the single-spa-vue plugin.`}
							/>
							<Technology
								imgSrc="/images/svelte.jpg"
								cardTitle="Svelte"
								href="/#/svelte"
								explanation={`Svelte is compatible with single-spa. Easily get started with the single-spa-svelte plugin.`}
							/>
						</div>
					</div>
					<div className="row">
						<h4 className="light">
							Build system examples
						</h4>
						<p className="caption">
							Each application chooses it's own build system, which will fit into the root single-spa application at runtime.
						</p>
						<div className="row">
							<Technology
								imgSrc="https://webpack.js.org/2baa77d6015e6de6adf1ffa247530568.svg"
								cardTitle="Webpack"
								href="/#/react"
								explanation={`The React example is built with Webpack, and even uses require.ensure for extra lazy loading.`}
							/>
							<Technology
								imgSrc="https://avatars3.githubusercontent.com/u/3802108?v=3&s=200"
								cardTitle="jspm/SystemJS"
								href="/#/angular1"
								explanation={`The navbar app, home app, and Angular 1 app are all built with JSPM / SystemJS.`}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
	componentWillUnmount() {
		this.subscription.dispose();
	}
}
