import React, {Component} from 'react'

import helper from './utility/helper/helper'
import MenuNav from './MenuNav'
import ClockTower from './ClockTower'
class MikeMain extends Component {
	constructor(){
		super()

		this.state = {

			triviaQs: [], 
			triviaQ1: "",
			date: new Date().toLocaleTimeString()	
    }
}
  tick () {
	const element = (
			<div>
				<h3>{Date().toLocalTimeString()}</h3>
			</div>	
		)
	    	setInterval(this.tick, 1000)

  }


	

componentDidMount() {

}

	render() {
		return(
			<div>
			{this.tick}
				<h1 className="myName">Michael Yingling</h1>
				<ClockTower />
			</div>	
			)
	}
}

export default MikeMain