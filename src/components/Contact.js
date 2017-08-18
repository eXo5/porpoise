import React, {Component} from 'react'
import helper from '../utility/helper/helper'
import Navi from './Navigator'
class Contact extends Component {
	constructor(){
		super()
		this.state = {
			aaay: ""
		}
	}

render() {

	return (
		<div>
			<Navi />
		<p>ayyy</p>
		</div>
		)
	}
}

export default Contact