import Inferno from 'inferno';
import Component from 'inferno-component';

export default class InfernoComponent extends Component {
	constructor() {
		super();

		// set initial time:
		this.state = {
			time: Date.now()
		};
	}

	componentDidMount() {
		// update time every second
		this.timer = setInterval(() => {
			this.setState({ time: Date.now() });
		}, 1000);
	}

	componentWillUnmount() {
		// stop when not renderable
		clearInterval(this.timer);
	}

	render() {
		let time = new Date(this.state.time).toLocaleTimeString();
		return <span>{ time }</span>;
	}
}