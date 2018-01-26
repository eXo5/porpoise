import React, {Component} from 'react'
import helper from '../utility/helper/helper'
import Navi from './Navigator'
import logo from '../logo.svg';
import '../App.css';
import UnderConstruction from './ConstructionCard'
import TimeClock from './TimeClock'
class MikeMain extends Component {
	constructor(){
		super()
		this.state = {
			triviaQs: [], 
			triviaQ1: ""

    }
}

componentDidMount() {

}

	render() {
		return(
			<div>
				<div id="logo">
					<img src={logo} className="App-logo" alt="logo" />
				</div>

				<Navi />
				<UnderConstruction />
				<h6 id="init">So I'm going to put some recipes or something here? I'm working on it</h6>
				<h6 id="loluwotm8"></h6>
			</div>
			)
	}
}

export default MikeMain