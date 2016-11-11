import React from 'react';
import {StyleSheet, css} from 'aphrodite';

export default class Walkthroughs extends React.Component {
	constructor() {
		super();
		this.state = {
			first: false,
			second: false,
			third: false,
		};
	}
	render() {
		return (
			<ul className="collection">
				<li className={`collection-item ${css(styles.item)}`} onClick={() => this.setState({first: !this.state.first})}>
					Transitioning between React and Angular applications without reloading the page.
					{this.state.first &&
						<div>
							<ol>
								<li className={css(styles.explanation)}>
									1. Click on the "React" link in the navbar
								</li>
								<li className={css(styles.explanation)}>
									2. Inspect element on the content, looking for &nbsp; <img src="/images/data-reactroot.png" />
								</li>
								<li className={css(styles.explanation)}>
									3. Click on the "Angular 1" link in the navbar
								</li>
								<li className={css(styles.explanation)}>
									4. Inspect element on the content, looking for &nbsp; <img src="/images/ng-scope.png" />
								</li>
							</ol>
						</div>
					}
				</li>
				<li className={`collection-item ${css(styles.item)}`} onClick={() => this.setState({second: !this.state.second})}>
					Lazy loading entire applications for fast initial load times.
					{this.state.second &&
						<div>
							<ol>
								<li className={css(styles.explanation)}>
									1. Open up the network tab of your dev tools
								</li>
								<li className={css(styles.explanation)}>
									2. Reload this page
								</li>
								<li className={css(styles.explanation)}>
									3. Click on the Angular 1 link in the navbar
								</li>
								<li className={css(styles.explanation)}>
									4. Look for a new network request for the Angular 1 app's code &nbsp; <img src="/images/lazy-load.png" style={{border: '1px solid #e0e0e0'}} />
								</li>
							</ol>
						</div>
					}
				</li>
				<li className={`collection-item ${css(styles.item)}`} onClick={() => alert("Example coming soon!")}>
					Parts of the page written in one framework, while other parts use a different framework.
				</li>
			</ul>
		);
	}
}

const styles = StyleSheet.create({
	item: {
		cursor: 'pointer',
		':hover': {
			backgroundColor: '#efefef',
		},
	},
	explanation: {
		paddingTop: '10px',
		lineHeight: '20px',
		display: 'flex',
		alignItems: 'center',
	},
});
