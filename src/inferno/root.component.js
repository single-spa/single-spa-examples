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

		return <div style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				flexDirection: 'column'
			}}>

			<p style={{fontSize: '16pt', paddingTop: '32px'}}>
				Built with Inferno

				<img src="/images/inferno-logo.png" align="center" width="60" style={{paddingLeft: '12px'}} />
			</p>
			<p style={{fontSize: '32pt'}}>
				The time is:<br />
				<strong>{ time }</strong>
			</p>
		</div>
	}
}