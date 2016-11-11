import React from 'react';

export default class Navbar extends React.Component {
	render() {
		return (
			<div className="navbar-fixed">
				<nav>
					<div className="nav-wrapper">
						<a className="brand-logo activator" href="https://github.com/CanopyTax/single-spa" target="_blank">
							<i />
							single-spa
						</a>
						<ul id="nav-mobile" className="right hide-on-med-and-down">
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
								<a onClick={() => alert("Angular 2 example is coming soon!")}>
									Angular 2
								</a>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		);
	}
}
