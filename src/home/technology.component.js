import React from 'react';

export default class Technology extends React.Component {
	render() {
		const {imgSrc, cardTitle, href, explanation, imgBackgroundColor} = this.props;
		const imgStyles = {
			height: '150px',
			display: 'flex',
			alignItems: 'center',
		};
		if (imgBackgroundColor) {
			imgStyles.backgroundColor = imgBackgroundColor;
		}
		return (
			<div className="col l3">
				<div className="card">
					<div className="card-image" style={imgStyles}>
						<img className="activator" src={imgSrc} style={{maxHeight: '150px'}} />
					</div>
					<div className="card-content">
						<span className="card-title grey-text text-darken-4 activator">
							{cardTitle}
							<i className="material-icons right">more_vert</i>
						</span>
						<p>
							<a href={href}>
								Go to example
							</a>
						</p>
					</div>
					<div className="card-reveal">
						<span className="card-title grey-text text-darken-4 activator">
							{cardTitle}
							<i className="material-icons right">close</i>
						</span>
						<p style={{marginBottom: '3px'}}>
							{explanation}
						</p>
						<a className="waves-effect waves-teal btn-flat" href={href}>
							Go to example
						</a>
					</div>
				</div>
			</div>
		)
	}
}
