import {ReplaySubject} from 'rx';

export const showFrameworkObservable = new ReplaySubject(1);

export function getBorder(framework) {
  const colors = {
    react: '#61dafb',
    angular: '#A6120D',
    angular: '#1976D2',
    vue: '#41B883',
    svelte: '#A92224',
    preact: '#673AB8',
    iframe: 'black',
    inferno: '#FF3232',
  };

  const color = colors[framework] || 'rgb(66, 133, 244)';
  return `10px solid ${color}`;
}
