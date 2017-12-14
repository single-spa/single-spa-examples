import { h, Component } from 'preact';
import Item from './Item';

export default class TopItems extends Component {
  sortByScore() {
    let { items } = this.props;
    items.sort( (a, b) => b.score - a.score );
    this.setState({ items });
  }

  render({ items }) {
    return (
      <div>
        <SortButton items={items} sortByScore={::this.sortByScore}/>
        <div class="top-stories">
          { items.map( (item, i) => (
            <Item key={item.id} rank={i} item={item} />
          )) }
        </div>
      </div>
    );
  }
}

const SortButton = ({ sortByScore }) => (
  <div class="topitems">
    <button class="button" onClick={sortByScore}>Sort!</button>
  </div>
);
