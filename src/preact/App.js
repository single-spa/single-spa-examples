import { h, Component } from 'preact';
import './base.css';
import Navigation from './Navigation';
import TopItems from './TopItems';
import { showFrameworkObservable, getBorder } from 'src/common/colored-border.js';

const API_ORIGIN = 'https://hacker-news.firebaseio.com';

const asJson = r => r.json();

export default class App extends Component {
  state = { items: [] };

  loadItems() {
    fetch(`${API_ORIGIN}/v0/topstories.json`).then(asJson)
      .then( items => Promise.all( items.slice(0, 19).map(
        item => fetch(`${API_ORIGIN}/v0/item/${item}.json`).then(asJson)
      )) )
      .then( items => this.setState({ items }) );
  }

  componentDidMount() {
    this.loadItems();
    if (this.props.autoreload=='true') {
      setInterval(::this.loadItems, 4000);
    }
    this.subscription = showFrameworkObservable.subscribe(newValue => this.setState({frameworkInspector: newValue}));
  }

  render({ }, { items }) {
    return (
      <div style={this.state.frameworkInspector ? {border: getBorder('preact')} : {}}>
        {this.state.frameworkInspector &&
          <div>(built with Preact)</div>
        }
        <Navigation />
        <TopItems items={items} />
      </div>
    );
  }

  componentWillUnmount() {
    this.subscription.dispose();
  }
}
