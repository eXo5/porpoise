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
		<p>This will be a carousel of'Soldier Art' from the inside of a concrete bunker in Afghanistan. If you ever find yourself in the desert you're liable to spend plenty of time staring at similar images.</p>

		<img src="script.php?file=/public/images/IMG_1369.JPG" />
		</div>
		)
	}
}

export default AboutLife