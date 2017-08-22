import React, {Component} from 'react'
import helper from '../utility/helper/helper'
import Navi from './Navigator'
const fs = require('fs');
const testFolder = '../../public/images';
class AboutLife extends Component {
	constructor(){
		super()
		this.state = {
			aaay: ""
		}
	}

componentDidMount(){
	helper.getImages() 
		.then(function(results){
			console.log(results)
			})
		}
	




render() {

	return (
		<div>
			<Navi />
		<p>This is 'Soldier Art' from the inside of a concrete bunker in Afghanistan.</p>
		{}
		</div>
		)
	}
}

export default AboutLife