import {getBorder, showFrameworkObservable} from 'src/common/colored-border.js';

/* Vanilla javascript and iframes don't result in the most elegant code, but
 * it works. No judging :).
 */

let iframe, container, explanation, frameworkInspectorSubscription;

export async function bootstrap() {
  container = document.getElementById('vanillajs');
  container.style.width = `100%`;
  container.style.height = `700px`;

  iframe = document.createElement('iframe');
  iframe.innerHTML = `<fieldset><legend>Vanilla</legend></fieldset>`;
  iframe.setAttribute('src', '/build/vanillajs/index.html');
  iframe.style.width = `100%`;
  iframe.style.height = `659px`;
  // Until it is visible, the assets are not downloaded
  iframe.style.display = 'none';

  container.appendChild(iframe);
}

export async function mount() {
  iframe.style.display = 'block';
  container.style.display = 'block';

  frameworkInspectorSubscription = showFrameworkObservable.subscribe(newValue => {
    if (newValue) {
      container.style.border = getBorder("iframe");
      explanation = document.createElement('div');
      explanation.textContent = `(Built with vanilla javascript that is put into an iframe)`;
      container.insertBefore(explanation, iframe);
    } else {
      cleanupInspector();
    }
  });
}

export async function unmount() {
  iframe.style.display = 'none';
  iframe.style.border = ``;
  container.style.display = 'none';
  cleanupInspector();
  frameworkInspectorSubscription.dispose();
}

function cleanupInspector() {
  container.style.border = ``;
  if (explanation) {
    container.removeChild(explanation);
    explanation = null;
  }
}
