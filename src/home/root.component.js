import React from 'react';
import Technology from './technology.component.js';
import Walkthroughs from './walkthroughs.component.js';

export default function HomeRoot() {
	return (
		<div>
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
							imgSrc="https://blog.dashlane.com/wp-content/uploads/2016/02/react-logo-2.png"
							cardTitle="React"
							href="/#/react"
							explanation={`Yep we've got a React example. We actually just borrowed it from the react-router examples, to show how easy it is to migrate an existing app into single-spa`}
						/>
						<Technology
							imgSrc="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSv5a746ZzdFnCWN6Eo0ESIMf5QvoB9tFk0bWjgEXnt-7bHh4Djyw"
							cardTitle="Angular 1"
							href="/#/angular1"
							explanation={`Angular 1 has some quirks, but works just fine when you use the single-spa-angular1 npm library to help you set up your app`}
						/>
						<Technology
							imgSrc="https://angular.io/resources/images/logos/standard/logo-nav.png"
							imgBackgroundColor="#1976D2"
							cardTitle="Angular 2"
							href="javascript:alert('coming soon')"
							explanation={`Angular 2 is compatible with single-spa, we just haven't built an example for it yet.`}
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
							imgSrc="http://cdn2.hubspot.net/hubfs/339703/webpack_logo.jpg"
							cardTitle="Webpack"
							href="/#/react"
							explanation={`The React example is built with Webpack, and even uses require.ensure for extra lazy loading.`}
						/>
						<Technology
							imgSrc="http://getkickstrap.com.s3-website-us-east-1.amazonaws.com/img/jspm.png"
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
