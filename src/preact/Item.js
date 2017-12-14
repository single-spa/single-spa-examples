import { h, Component } from 'preact';

let getDomain = url => url && (url.split('/')[ ~url.indexOf('://') ? 2 : 0 ]).replace(/^www\./,'') || null;

export default class Item extends Component {
  render({ item }) {
    return (
      <div class="item">
        <div class="vitals">
          <div class="score">{item.score}</div>
          <div class="comments">
            <a target="_blank" href={`https://news.ycombinator.com/item?id=${item.id}`}>{item.descendants}</a>
          </div>
        </div>
        <div class="content">
          <div class="title">
            <a target="_blank" href={item.url}>{item.title}</a>
            <span class="domain">({ getDomain(item.url) })</span>
          </div>
        </div>
      </div>
    );
  }
}
