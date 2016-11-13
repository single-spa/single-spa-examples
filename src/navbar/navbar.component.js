import React from 'react';
import Dialog from './dialog.component.js';

export default class Navbar extends React.Component {
	componentDidMount() {
		$(".button-collapse").sideNav();
	}
	render() {
		return (
			<div className="navbar-fixed">
				<nav>
					<div className="nav-wrapper">
						<a className="brand-logo activator" href="#">
							<i />
							single-spa-examples
						</a>
						<a href="#" data-activates="mobile-demo" className="button-collapse">
							<i className="material-icons">
								menu
							</i>
						</a>
						<ul className="right hide-on-med-and-down">
							{menuItems()}
						</ul>
						<Dialog dialogId="sideNav">
							<ul className="side-nav" id="mobile-demo">
								{menuItems()}
							</ul>
						</Dialog>
					</div>
				</nav>
			</div>
		);
	}
}

function menuItems() {
	return (
		<div>
			<li>
				<a href="#">
					Home
				</a>
			</li>
			<li>
				<a href="#/react">
					React
				</a>
			</li>
			<li>
				<a href="#/angular1">
					Angular 1
				</a>
			</li>
			<li>
				<a href="#/angular2">
					Angular 2
				</a>
			</li>
		</div>
	)
}
