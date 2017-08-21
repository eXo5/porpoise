import React, {Component} from 'react'
import helper from '../utility/helper/helper'
import Navi from './Navigator'
class AboutMe extends Component {
	constructor(){
		super()
		this.state = {
			aaay: ""
		}
	}

render() {

	return (
		<div id="aboutDiv">
			<Navi />
				<div className="container">
					<h1 id="h1Bio">Informal Bio</h1>
						<br />
						<br />
					<p id="bio"><br /><br />I'm not exactly the best at this so I'll just get right into it. My name is Michael Yingling. I was born in Newark, DE on the Ides of March, 1989. I joined the Army in 2008. I graduated Basic Training for the United States Army on September 11th, 2008. I graduated the Army's Air Traffic Control School 7 months later and eventually became the senior Controller at a Brown Stagefield, a helicopter training site on the outskirts of the Army's Home of Aviation, Fort Rucker, AL. I stayed there for several years and then as soon as I was able, I reenlisted for choice of duty station to send myself to Germany, where I eventually became colleagues with a handful of significantly more experienced civlian Controllers. I spent the rest of my time in the military separating and sequencing aircraft in the U.S. Army's most intricate airspace in the European Theater.  In March of 2015, Sergeant Yingling became Mr. Yingling. I initially worked a few odd jobs as a civilian to kill time, but I eventually ended up as a civilian contractor in an Air Traffic Control Tower in a remote region of the Kandahar province in Afghanistan. After I grew weary of the desert, I made my way to the Control Tower in Guantanamo Bay, Cuba.<br /><br /> However, careers in aviation aren't for everyone. At the end of the day we humans are given a  predisposition or a longing for feeling accomplished, and like working in a Post Office with a never ending flux of letters and packages, Air Traffic Control just never ends. So in order to satiate that internal affinity for finishing, I gave myself an adjusted heading that navigated me into another field that requires actual creativity.<br /><br /></p>
						<p id="codeBC">I built my first computer when I was 11 years old. I built my first web page in basic HTML and CSS before I was a teenager, but for whatever reason, (*cough* Video Games), it never got any further than that. I knew if I wanted to produce anything interesting or helpful I would need to learn to program. I started off learning Full Stack Javascript at Rutger's Coding Bootcamp. 3 months of every day struggle culminated in rendering me capable of learning how to learn.  School's been out for a little over a week, and I'm further along than I thought I would be when it ended. Mission Accomplished as far as I'm concerned, and as such, I would like to Thank my instructor and his assistants and also everyone else in the class for becoming the cohesive unit of support that we became Without Franklin, Alan and Tom, none of us would be where we are today. Thank you all.</p>
				</div>		
			</div>
		)
	}
}

export default AboutMe