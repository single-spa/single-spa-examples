import React from 'react';
import ReactDOM from 'react-dom';

export default class Dialog extends React.Component {
  constructor() {
    super();
    this.element = null;
  }

  componentDidMount() {
    let p = this.props.dialogId && document.getElementById(this.props.dialogId);

    if (!p) {
      p = document.createElement('div');
      p.id = this.props.dialogId;
      document.body.appendChild(p);
    }
    this.element = p;
    this.componentDidUpdate();
  }

  componentWillUnmount() {
    document.body.removeChild(this.element);
  }

  componentDidUpdate() {
    ReactDOM.render(<div>{this.props.children}</div>, this.element);
  }

  render() { return null }
}
