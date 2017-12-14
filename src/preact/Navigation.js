import { h, Component } from 'preact';
import Title from './Title';

export default class Navigation extends Component {
  componentDidMount() {
    let lastUpdate = new Date();
    this.setState({ lastUpdate });
  }

  render({ }, { lastUpdate }) {
    return (
      <div class="navigation">
        <h1><Title/></h1>
        <span>Last updated at {lastUpdate ? lastUpdate.toString() : 'never'}</span>
      </div>
    );
  }
}
