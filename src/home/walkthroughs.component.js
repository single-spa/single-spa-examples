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
                  3. Click on the "AngularJS" link in the navbar
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
                  3. Click on the AngularJS link in the navbar
                </li>
                <li className={css(styles.explanation)}>
                  4. Look for a new network request for the AngularJS app's code &nbsp; <img src="/images/lazy-load.png" style={{border: '1px solid #e0e0e0'}} />
                </li>
              </ol>
            </div>
          }
        </li>
        <li className={`collection-item ${css(styles.item)}`} onClick={() => this.setState({third: !this.state.third})}>
          Parts of the page written in one framework, while other parts use a different framework.
          {this.state.third &&
            <div>
              <ol>
                <li className={css(styles.explanation)}>
                  1. Click on the Framework Inspector in the navbar, to highlight which parts of the app are written in which framework
                </li>
                <li className={css(styles.explanation)}>
                  2. Inspect element on the navbar. Notice the &nbsp;<img src="/images/data-reactroot.png" />
                </li>
                <li className={css(styles.explanation)}>
                  3. Go to the AngularJS app and inspect element. &nbsp;<img src="/images/ng-scope.png" />
                </li>
                <li className={css(styles.explanation)}>
                  This shows a simple example of having a part of page written in one framework (React) while another part
                  is written in a different framework (Angular). As you navigate through all the other apps in this demo,
                  you will be able to see many different frameworks all coexisting peacefully with the navbar.
                </li>
                <li className={css(styles.explanation)}>
                  <i>
                    The single-spa ideology is to have independent, self-contained apps make up an entire page. Instead of betting on
                    a single framework for a long time and for every feature, single-spa helps you adopt new frameworks as they are
                    invented.
                  </i>
                </li>
              </ol>
            </div>
          }
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
