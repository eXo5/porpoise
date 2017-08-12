import React, {Component} from 'react';
import Clock from 'react-live-clock'

class ClockTower extends Component {
	render(){
	return(
		<div className="clock">
			<Clock format={"HH:mm:ss"} ticking={true} timezone={"US/Eastern"} />
		</div>
		)
	}
}

export default ClockTower