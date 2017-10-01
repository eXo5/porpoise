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
					I know this is hard to read. This is not an indeal background image, and it's going to change when it's not under construction. </p>
				</div>	
					

		</Row>	
			</div>
			)
	}
}

export default UnderConstruction