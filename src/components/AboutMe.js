import React, {Component} from 'react'
import helper from '../utility/helper/helper'

class AboutMe extends Component {
	constructor(){
		super()
		this.state = {
			aaay: ""
		}
	}

render() {

	return (
			<div>
			<h1 id="h1Bio">Informal Bio</h1>
			<br />
			<p id="bio">Welcome to the mini autobio I've put together.<br /><br />I am Michael Yingling. I was born in Newark, DE on the Ides of March in the year 1989. I graduated Howard High School of Technology in 2007 and enlisted in the United States Army as an Air Traffic Controller in 2008. In March of 2015, Sergeant Yingling became Mr. Yingling. I eventually worked as a civilian contractor in a Control Tower in a remote region of the Kandahar province in Afghanistan, and then in the Control Tower in Guantanamo Bay, Cuba.<br /><br /> However, careers in aviation aren't for everyone. At the end of the day we humans are given a  predisposition or a longing for feeling accomplished, and like working in a Post Office with a never ending flux of letters and packages, Air Traffic Control just never ends. So in order to satiate that internal affinity for finishing, I gave myself an adjusted heading that navigated me into another field that requires actual creativity.</p>
				<p></p>
			</div>		
		)
	}
}

export default AboutMe