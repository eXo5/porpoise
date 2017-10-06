import React, {Component} from 'react'
import { Row, Col } from 'react-materialize'
import helper from '../utility/helper/helper';

class UnderConstruction extends Component {
	constructor(){
		super()

		this.state = {
			array: []
    
    }
}

componentDidMount() {

}

	render() {
		return(
			
			<div className="center">
				<Row>
				<h2 id="myName">theYing</h2>
				<div id="construction">
					<h1 id="uC">
					<br />
					This corner of the internet is
					<br />
					Under Construction
					<br />
					<br />
					<br />
					</h1>
					<p className="textIndent">
					This is my personal 'playground' for learning - my arrays are in a constant state of disarray and you shouldn't be surprised if the site is broken for any reason
				</p>
				</div>	
					

		</Row>	
			</div>
			)
	}
}

export default UnderConstruction