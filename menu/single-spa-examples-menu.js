export default function() {
    return {
        applicationWasMounted: function() {
            return new Promise(function(resolve) {
                showTopNav();
                resolve();
            });
        },
    }
}

export function showTopNav() {
    const domParser = new DOMParser();
    const parsedDom = domParser.parseFromString(`
        <ul class="sspa-topnav">
            <li><a href="https://www.github.com/joeldenning/single-spa">Github Project</a></li>
            <li><a href="/phonecat">Bower Angular Phonecat app (the one from the official tutorial)</a></li>
            <li><a href="/legacy">JSPM Angular 1.3 app</a></li>
            <li><a href="/v2">JSPM Angular 1.4.6 app</a></li>
            <li><a href="/webpack1">Webpack Angular 1.4.7 app</a></li>
            <li><a href="/webpack2">Another Webpack Angular 1.4.7 app</a></li>
            <li><a href="/todomvc-react">Todo MVC's React 0.13.3 app</a></li>
        </ul>
    `, 'text/html');
    document.body.insertBefore(parsedDom.body.children[0], document.body.children[0]);
}
