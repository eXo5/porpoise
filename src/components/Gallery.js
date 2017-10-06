import React, {Component} from 'react'
import helper from '../utility/helper/helper'
import Navi from './Navigator'

import pic from '../images/IMG_1369.JPG'

const testFolder = '../../images';
class Gallery extends Component {
	constructor(){
		super()
		this.state = {
			picCount: "",
			next: "",
			thisPic: "",
			lastPic: ""
		}
	}

componentDidMount(){

		}
	




render() {

	return (
		<div>
			<Navi />


		<img className="thesePics" src={pic} />
		</div>
		)
	}
}

export default Gallery