import React, {Component} from 'react'
import {Input, Button } from 'react-bootstrap'
import Navi from './Navigator'
import { Parallax, Background } from 'react-parallax';

class Payment extends Component {
	constructor(){
		super()
		this.state = {

		}
	}

handleChange=(event)=>{
	var newState={}; 
newState[event.target.id] = event.target.value;
this.setState({})
}	

render(){
	return(
			<div>
			<Navi />

			</div>
		)
}

}

export default Payment