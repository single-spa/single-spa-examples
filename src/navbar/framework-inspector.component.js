import React from 'react';
import {showFrameworkObservable} from 'src/common/colored-border.js';
import FrameworkInspectorModal from './framework-inspector-modal.component.js';
import Dialog from './dialog.component.js';

export default class FrameworkInspector extends React.Component {
  constructor() {
    super();
    this.state = {
      inspectorModalDismissed: false,
      showInspectorModal: false,
      frameworkInspectorOn: false,
    };
  }
  render() {
    return (
      <li className={this.state.frameworkInspectorOn ? 'active' : ''}>
        <a onClick={() => {
          if (this.state.inspectorModalDismissed) {
            toggleFrameworkInspector.call(this);
          } else {
            this.setState({showInspectorModal: true});
          }
        }}>
          Framework inspector
        </a>
        {this.state.showInspectorModal &&
          <Dialog>
            <FrameworkInspectorModal
              hideModal={() => {
                this.setState({showInspectorModal: false, inspectorModalDismissed: true});
                toggleFrameworkInspector.call(this);
              }}
            />
          </Dialog>
        }
      </li>
    )
  }
}

function toggleFrameworkInspector() {
  showFrameworkObservable.onNext(!this.state.frameworkInspectorOn);
  this.setState({frameworkInspectorOn: !this.state.frameworkInspectorOn});
}
