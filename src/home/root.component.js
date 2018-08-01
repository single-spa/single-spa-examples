import React from 'react';
import Technology from './technology.component.js';
import Walkthroughs from './walkthroughs.component.js';
import {getBorder, showFrameworkObservable} from 'src/common/colored-border.js';

export default class HomeRoot extends React.Component {
  constructor() {
    super();
    this.state = {
      frameworkInspector: false,
    };
  }
  componentWillMount() {
    this.subscription = showFrameworkObservable.subscribe(newValue => this.setState({frameworkInspector: newValue}));
  }
  render() {
    return (
      <div style={this.state.frameworkInspector ? {border: getBorder('react')} : {}}>
        {this.state.frameworkInspector &&
          <div>(built with React)</div>
        }
        <div className="container">
          <div className="row">
            <h4 className="light">
              Introduction
            </h4>
            <p className="caption">
              Single-spa is a javascript libary that allows for many small applications to coexist in one single page application.
              This website is a demo application that shows off what single-spa can do.
              For more information about single-spa, go to the <a href="https://github.com/CanopyTax/single-spa" target="_blank">single-spa Github page</a>.
              Additionally, this website's code can be found at the <a href="https://github.com/CanopyTax/single-spa-examples" target="_blank">single-spa-examples Github</a>.
              While you're here, check out the following features:
            </p>
            <Walkthroughs />
          </div>
          <div className="row">
            <h4 className="light">
              Framework examples
            </h4>
            <p className="caption">
              Single-spa allows for multiple frameworks to coexist in the same single page application.
            </p>
            <div className="row">
              <Technology
                imgSrc="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMyAyMC40NjM0OCI+PHRpdGxlPmxvZ288L3RpdGxlPjxwYXRoIGQ9Ik0xOC45MTA3LDYuNjMyNTdoMHEtLjM2NzIxLS4xMjYtLjc0MDQyLS4yMzMzLjA2MTg3LS4yNTE0MS4xMTQ0MS0uNTA1Yy41NjA0NS0yLjcyMDY0LjE5NC00LjkxMjM3LTEuMDU3MzktNS42MzM4Ni0xLjE5OTgtLjY5Mi0zLjE2MjEuMDI5NTItNS4xNDM5NCwxLjc1NDE0cS0uMjkyOTMuMjU1NS0uNTcyNjcuNTI1NTQtLjE4NzI3LS4xNzk1MS0uMzgxMS0uMzUyQzkuMDUyNTcuMzQzOSw2Ljk3MDY2LS40MzMxNiw1LjcyMDU4LjI5MDQ2LDQuNTIxOTEuOTg0MzYsNC4xNjY4NiwzLjA0NDg5LDQuNjcxNDQsNS42MjMyMnEuMDc1My4zODMuMTcuNzYxNzljLS4yOTQ1OC4wODM2Ny0uNTc5MDguMTcyODQtLjg1MTI3LjI2NzcxQzEuNTU1MTQsNy41MDE2NSwwLDguODMyMjUsMCwxMC4yMTIzMWMwLDEuNDI1NDYsMS42NjkzNSwyLjg1NTIsNC4yMDU3NSwzLjcyMnEuMzA4NS4xMDQ5NC42MjE5My4xOTQ0Mi0uMTAxNzkuNDA4LS4xODA2OC44MjExNGMtLjQ4MTA2LDIuNTMzNTQtLjEwNTM1LDQuNTQ1MjEsMS4wOTAxNyw1LjIzNDg0LDEuMjM0ODEuNzEyLDMuMzA3MjUtLjAxOTg1LDUuMzI1MzMtMS43ODM4N3EuMjM5MjYtLjIwOTE3LjQ3OTk0LS40NDIzOC4zMDI5LjI5MjI1LjYyMTczLjU2NzI3YzEuOTU0NzcsMS42ODIwNywzLjg4NTMxLDIuMzYxMzIsNS4wNzk4MiwxLjY2OTg2LDEuMjMzNjktLjcxNDE2LDEuNjM0NTQtMi44NzUyNSwxLjExNC01LjUwNDU5cS0uMDU5NTUtLjMwMTI0LS4xMzc5Mi0uNjE0ODEuMjE4MzQtLjA2NDQzLjQyNzcyLS4xMzM1NUMyMS4yODQ1NCwxMy4wNjkxNSwyMywxMS42NTY4MSwyMywxMC4yMTIzMiwyMyw4LjgyNzI2LDIxLjM5NDc4LDcuNDg3NzEsMTguOTEwNyw2LjYzMjU3Wk0xMi43Mjg0LDIuNzU1ODFDMTQuNDI2NDYsMS4yNzgsMTYuMDEzNDYuNjk0NTcsMTYuNzM2NTcsMS4xMTE2aDBjLjc3MDE0LjQ0NDIxLDEuMDY5NzEsMi4yMzU0LjU4NTgsNC41ODQ0MXEtLjA0NzU4LjIyOTUzLS4xMDM0Mi40NTcyNGEyMy41Mzc1MiwyMy41Mzc1MiwwLDAsMC0zLjA3NTI3LS40ODU4NEEyMy4wODEyOCwyMy4wODEyOCwwLDAsMCwxMi4xOTk1LDMuMjQwOTRRMTIuNDU3ODgsMi45OTE4NCwxMi43Mjg0LDIuNzU1ODFaTTYuNzkxMTEsMTEuMzkxMjRxLjMxMi42MDI2NS42NTIwNywxLjE5MDEzLjM0NjkyLjU5OTExLjcyMjEsMS4xODExN2EyMC45MjE2OCwyMC45MjE2OCwwLDAsMS0yLjExOTY3LS4zNDA4QzYuMjQ4NjcsMTIuNzY2LDYuNDk4ODcsMTIuMDg0NDMsNi43OTExMSwxMS4zOTEyNFpNNi43OSw5LjA4MDQxYy0uMjg2MTMtLjY3ODYzLS41MzA5My0xLjM0NTg2LS43MzA4NS0xLjk5MDE5LjY1NjI0LS4xNDY4OCwxLjM1Ni0uMjY2ODksMi4wODUxNi0uMzU4cS0uMzY2MTEuNTcxLS43MDUxLDEuMTU4NzdRNy4xMDA3Niw4LjQ3OCw2Ljc5LDkuMDgwNDFabS41MjIyOCwxLjE1NTUycS40NTQxMS0uOTQ1MTcuOTc4My0xLjg1NDJ2LjAwMDJxLjUyMzY5LS45MDg1NywxLjExNTIxLTEuNzc1NDJjLjY4NC0uMDUxNzEsMS4zODUzNi0uMDc4NzksMi4wOTQzMi0uMDc4NzkuNzEyMTIsMCwxLjQxNDM3LjAyNzI4LDIuMDk4MTkuMDc5NHEuNTg1MTQuODY0ODcsMS4xMDgxOCwxLjc2OTQxLjUyNTY1LjkwNjM1Ljk5MTUzLDEuODQ1NDUtLjQ2MDgzLjk0ODE3LS45ODgyOCwxLjg2MTczaC0uMDAwMXEtLjUyMjYxLjkwNzg2LTEuMTAzNCwxLjc4MDNjLS42ODI0LjA0ODc2LTEuMzg3Ni4wNzM5LTIuMTA2MjMuMDczOS0uNzE1NjgsMC0xLjQxMTkzLS4wMjIyOS0yLjA4MjQxLS4wNjU3NXEtLjU5NTU1LS44Njk5NS0xLjEyNDA2LTEuNzgzMDVRNy43Njc4OSwxMS4xODE0OCw3LjMxMjI3LDEwLjIzNTkzWm04LjI0ODUzLDIuMzM4NjJxLjM0Ny0uNjAxODIuNjY3LTEuMjE4NjNoMGEyMC44NjY3MSwyMC44NjY3MSwwLDAsMSwuNzcyMzgsMi4wMjMyNywyMC44NTE2NCwyMC44NTE2NCwwLDAsMS0yLjE0NTUyLjM2NTczUTE1LjIxOTM1LDEzLjE2NjgyLDE1LjU2MDgsMTIuNTc0NTVabS42NTc2Ny0zLjQ5MzQzcS0uMzE4ODMtLjYwNS0uNjYxNjMtMS4xOTY4NGgwcS0uMzM3MjctLjU4MjU4LS42OTk0LTEuMTUwMjJjLjczMzkuMDkyNjMsMS40MzcuMjE1NzksMi4wOTcxNy4zNjY1NEEyMC45NTkwOSwyMC45NTkwOSwwLDAsMSwxNi4yMTg0Nyw5LjA4MTEyWk0xMS41MTEsMy45NDM1OWEyMS4wMTI4OCwyMS4wMTI4OCwwLDAsMSwxLjM1MzUsMS42MzM5M3EtMS4zNTg0My0uMDY0MTktMi43MTg0LS4wMDA2MUMxMC41OTMsNC45ODc2NSwxMS4wNTA3LDQuNDQwMjIsMTEuNTExLDMuOTQzNTlaTTYuMjEyODQsMS4xNDA4MWMuNzY5NTMtLjQ0NTQzLDIuNDcwOTUuMTg5NzMsNC4yNjQyOCwxLjc4Mi4xMTQ2MS4xMDE3OS4yMjk3NC4yMDgzNi4zNDUwNy4zMTg2QTIzLjU0NTQyLDIzLjU0NTQyLDAsMCwwLDguODYyOTQsNS42NjYwOGEyNC4wMDgsMjQuMDA4LDAsMCwwLTMuMDY5MTYuNDc3cS0uMDg4LS4zNTIyOC0uMTU4MDgtLjcwODY2di4wMDAxQzUuMjAzMzksMy4yMjUzNiw1LjQ5MDQ0LDEuNTU5LDYuMjEyODQsMS4xNDA4MVpNNS4wOTEzMiwxMy4xODIzM3EtLjI4Ni0uMDgxODctLjU2Nzc4LS4xNzc3M0E4LjMyMzcxLDguMzIzNzEsMCwwLDEsMS44NDEsMTEuNTc5NTVhMi4wMzA3MiwyLjAzMDcyLDAsMCwxLS44NTg0OS0xLjM2NzI0YzAtLjgzNzQyLDEuMjQ4NjUtMS45MDU3MSwzLjMzMTE3LTIuNjMxNzhxLjM5MjA4LS4xMzYxLjc5MTYyLS4yNDkwOGEyMy41NjQ1NSwyMy41NjQ1NSwwLDAsMCwxLjEyMSwyLjkwNDc4QTIzLjkyMjQ3LDIzLjkyMjQ3LDAsMCwwLDUuMDkxMzIsMTMuMTgyMzNaTTEwLjQxNTk0LDE3LjY2MWE4LjMyMTYxLDguMzIxNjEsMCwwLDEtMi41NzQ2NywxLjYxMTg0aC0uMDAwMWEyLjAzMDQyLDIuMDMwNDIsMCwwLDEtMS42MTMwNi4wNjA2N2MtLjcyNTU2LS40MTgzNi0xLjAyNzA2LTIuMDMzNzYtLjYxNTczLTQuMjAwMzVxLjA3MzM3LS4zODQwNy4xNjgtLjc2MzYzYTIzLjEwNDQ0LDIzLjEwNDQ0LDAsMCwwLDMuMDk5NS40NDg2OSwyMy45MDk1NCwyMy45MDk1NCwwLDAsMCwxLjk3NDMxLDIuNDM5MjlRMTAuNjQsMTcuNDY0NTksMTAuNDE1OTQsMTcuNjYxWm0xLjEyMjIzLTEuMTEwNTNjLS40NjU2OS0uNTAyNTMtLjkzMDE1LTEuMDU4MzEtMS4zODM4My0xLjY1NjEycS42NjA1MS4wMjYsMS4zNDU2Ni4wMjYwNi43MDMyNiwwLDEuMzg4NDEtLjAzMDg0QTIwLjg5NDI1LDIwLjg5NDI1LDAsMCwxLDExLjUzODE3LDE2LjU1MDQ1Wm01Ljk2NjUxLDEuMzY3YTIuMDMwMzksMi4wMzAzOSwwLDAsMS0uNzUzLDEuNDI3OGMtLjcyNDg1LjQxOTU4LTIuMjc1LS4xMjU4MS0zLjk0NjU5LTEuNTY0MzFxLS4yODc1LS4yNDczNS0uNTc4MzctLjUyNzI3YTIzLjA4OTE0LDIzLjA4OTE0LDAsMCwwLDEuOTI3OS0yLjQ0OCwyMi45MzY0NywyMi45MzY0NywwLDAsMCwzLjExNTA3LS40ODAxNHEuMDcwMjQuMjg0LjEyNDQ5LjU1NjM4aDBBOC4zMiw4LjMyLDAsMCwxLDE3LjUwNDY4LDE3LjkxNzQ5Wm0uODM0MTctNC45MDczOWgtLjAwMDFjLS4xMjU3MS4wNDE2My0uMjU0NzguMDgxODQtLjM4NjI5LjEyMDgyYTIzLjA2MTIxLDIzLjA2MTIxLDAsMCwwLTEuMTY0NjgtMi45MTM3MywyMy4wNTExMiwyMy4wNTExMiwwLDAsMCwxLjExOTM4LTIuODcxMjhjLjIzNTI0LjA2ODIuNDYzNjUuMTQuNjgzNzIuMjE1NzksMi4xMjg0Mi43MzI1OCwzLjQyNjY1LDEuODE1OTMsMy40MjY2NSwyLjY1MDYxQzIyLjAxNzUzLDExLjEwMTQ1LDIwLjYxNTM4LDEyLjI1NTc0LDE4LjMzODg1LDEzLjAxMDFaIiBmaWxsPSIjNjFkYWZiIi8+PHBhdGggZD0iTTExLjUsOC4xNTg1YTIuMDUzODYsMi4wNTM4NiwwLDEsMS0yLjA1MzgxLDIuMDUzODFBMi4wNTM4MSwyLjA1MzgxLDAsMCwxLDExLjUsOC4xNTg1IiBmaWxsPSIjNjFkYWZiIi8+PC9zdmc+"
                imgBackgroundColor="#222222"
                cardTitle="React"
                href="/react"
                explanation={`Yep we've got a React example. We actually just borrowed it from the react-router examples, to show how easy it is to migrate an existing app into single-spa`}
              />
              <Technology
                imgSrc="https://angularjs.org/img/ng-logo.png"
                cardTitle="AngularJS"
                href="/angularjs"
                explanation={`AngularJS has some quirks, but works just fine when you use the single-spa-angularjs npm library to help you set up your app`}
              />
              <Technology
                imgSrc="/images/angular.svg"
                imgBackgroundColor="#1976D2"
                cardTitle="Angular"
                href="/angular"
                explanation={`Angular is compatible with single-spa, check out a simple 'Hello World' in the example.`}
              />
              <Technology
                imgSrc="https://vuejs.org/images/logo.png"
                cardTitle="Vue.js"
                href="/vue"
                explanation={`Vue.js is compatible with single-spa. Easily get started with the single-spa-vue plugin.`}
              />
              <Technology
                imgSrc="/images/svelte.jpg"
                cardTitle="Svelte"
                href="/svelte"
                explanation={`Svelte is compatible with single-spa. Easily get started with the single-spa-svelte plugin.`}
              />
              <Technology
                imgSrc="https://cycle.js.org/img/cyclejs_logo.svg"
                cardTitle="CycleJS"
                href="/cyclejs"
                explanation={`CycleJS is compatible with single-spa. Easily get started with the single-spa-cycle plugin.`}
              />
              <Technology
                imgSrc="https://camo.githubusercontent.com/31415a8c001234dbf4875c2c5a44b646fb9338b4/68747470733a2f2f63646e2e7261776769742e636f6d2f646576656c6f7069742f62343431366435633932623734336462616563316536386263346332376364612f7261772f333233356463353038663765623833346562663438343138616561323132613035646631336462312f7072656163742d6c6f676f2d7472616e732e737667"
                cardTitle="Preact"
                href="/preact"
                explanation={`Preact is compatible with single-spa. Easily get started with the single-spa-preact plugin.`}
              />
              <Technology
                imgSrc="http://xitrus.es/blog/imgs/vnll.jpg"
                cardTitle="Vanilla"
                href="/vanilla"
                explanation={`
                  If you want to write single-spa applications in vanilla javascript, that's fine too.
                `}
              />
              <Technology
                imgSrc="/images/inferno-logo.png"
                cardTitle="Inferno"
                href="/inferno"
                explanation={`
                  Inferno is compatible with single-spa. Easily get started with the single-spa-inferno plugin.
                `}
              />
            </div>
          </div>
          <div className="row">
            <h4 className="light">
              Build system examples
            </h4>
            <p className="caption">
              Each application chooses it's own build system, which will fit into the root single-spa application at runtime.
            </p>
            <div className="row">
              <Technology
                imgSrc="https://avatars0.githubusercontent.com/webpack?&s=256"
                cardTitle="Webpack"
                href="/react"
                explanation={`The React example is built with Webpack, and even uses require.ensure for extra lazy loading.`}
              />
              <Technology
                imgSrc="https://avatars3.githubusercontent.com/u/3802108?v=3&s=200"
                cardTitle="SystemJS"
                href="/angularjs"
                explanation={`The navbar app, home app, and AngularJS app are all built with JSPM / SystemJS.`}
              />
              <Technology
                imgSrc="http://4.bp.blogspot.com/-rI6g4ZgVqBA/Uv8fPnl9TLI/AAAAAAAAMZU/tbylo5ngisg/s1600/iFrame+Generator.jpg"
                cardTitle="Iframe"
                href="/vanilla"
                explanation={`
                  Putting things in iframes is the wrong thing to do many times, but there are valid use cases for it.
                  If you put a single-spa application into an iframe, you get a whole new DOM and global namespace for variables.
                  But the cons include degraded performance and trickier inter-app communication.
                `}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  componentWillUnmount() {
    this.subscription.dispose();
  }
}
