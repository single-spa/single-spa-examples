import {ReplaySubject} from 'rx';

export const showFrameworkObservable = new ReplaySubject(1);

export function getBorder(framework) {
	const colors = {
		react: '#61dafb',
		angular1: '#A6120D',
		angular2: '#26a69a',
	};

	const color = colors[framework] || 'rgb(66, 133, 244)';
	return `10px solid ${color}`;
}
