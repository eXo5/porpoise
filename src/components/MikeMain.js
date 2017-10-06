import React, {Component} from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import { Button } from 'react-materialize'
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
				<Link to="trivia"><Button>Trivia</Button></Link>
				<Link to="hangman"><Button>Trivia</Button></Link>
				
			</div>
			)
	}
}

export default MikeMain