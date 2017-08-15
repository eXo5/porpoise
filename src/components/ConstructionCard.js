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
				<h2 id="myName">Michael Yingling</h2>
				<div id="construction">
					<h1 id="uC">Under Construction</h1>
				</div>	
					

		</Row>	
			</div>
			)
	}
}

export default UnderConstruction