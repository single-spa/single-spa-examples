import React from 'react';

export default class Technology extends React.Component {
  render() {
    const {imgSrc, cardTitle, href, explanation, imgBackgroundColor} = this.props;
    const imgStyles = {
      height: '150px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };

    imgStyles.backgroundColor = imgBackgroundColor || '#fafafa';

    return (
      <div className="col s7 m3 l3">
        <div className="card">
          <div className="card-image" style={imgStyles}>
            <img className="activator" src={imgSrc} height="125" style={{maxHeight: '150px', width: 'initial', maxWidth: '100%'}} />
          </div>
          <div className="card-content">
            <span className="card-title grey-text text-darken-4 activator" style={{wordWrap: 'break-word'}}>
              {cardTitle}
            </span>
            <div>
              <a className="activator" style={{cursor: 'pointer'}}>
                Show me an example
              </a>
            </div>
          </div>
          <div className="card-reveal">
            <span className="card-title grey-text text-darken-4 activator">
              {cardTitle}
              <i className="material-icons right">close</i>
            </span>
            <p style={{marginBottom: '3px'}}>
              {explanation}
            </p>
            <a className="waves-effect waves-teal btn-flat" onClick={() => this.navigateTo(href)} style={{width: '100%', textAlign: 'center'}}>
              Open app
            </a>
          </div>
        </div>
      </div>
    )
  }

  navigateTo = url => window.history.pushState(null, null, url)
}
