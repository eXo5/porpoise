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
reenlisted = () => {
	return(
		<a href="http://www.armyreenlistment.com/option5.html">"reenlisted"</a>
		)
}
render() {

	return (
		<div id="aboutDiv">
			<Navi />
				<div className="container">
					<h1 id="h1Bio">Informal Bio</h1>
						<br />
						<br />
					<p id="bio"><br /><br />I'm not exactly the best at this so I'll just get right into it. My name is Michael Yingling. I was born in Newark, DE on the Ides of March, 1989. I joined the Army in 2008. I graduated Basic Training for the United States Army on September 11th, 2008. I graduated the Army's Air Traffic Control School 7 months later and eventually became the senior Controller at Brown Stagefield, a training site for rotary-wing (helicopters) aircraft on the outskirts of the Army's Home of Aviation, Fort Rucker, AL. Ultimately, I stayed there just shy of four years because as soon as I could, I reenlisted and to send myself to Germany, where I became colleagues with a handful of significantly more experienced civlian Controllers that taught me so much more than ATC. I spent the majority of my remaining time in service sequencing and separating aircraft for the U.S. Army's most intricate airspace in the European Theater.  In March of 2015, Sergeant Yingling became Mr. Yingling.  I eventually ended up as a civilian contractor in an Air Traffic Control Tower in a remote region of the Kandahar province in Afghanistan. But as it turns out, that place is all kinds of inhospitable, and I just plain didn't like it. So, I made my way to another Control Tower, this time it was Guantanamo Bay, Cuba.<br /><br /> However, careers in aviation aren't for everyone. And being employed by a cronyistic oligarchy just doesn't jive with my morals, but that's a rant for another time. At the end of the day, humans have a predisposition or a longing for feeling accomplished, and like working in a Post Office, Air Traffic Control just never ends, if there's no flux of aircraft there's nothing to control. So, in order to satiate my internal affinity for finishing, I issued myself an adjusted heading and navigated  into another field that actually has surprise and  future.<br /><br /></p>
						<p id="codeBC">I built my first computer when I was 11 years old. I built my first web page in basic HTML and CSS before I was a teenager, but for whatever reason, (*cough* Video Games), it never got any further than that. I knew if I wanted to produce anything interesting or helpful I would need to learn to program. I started off learning Full Stack Javascript at Rutger's Coding Bootcamp. 3 months of every day struggle culminated in rendering me capable of learning how to learn.  School's been out for a little over a week, and I'm further along than I thought I would be when it ended. Mission Accomplished as far as I'm concerned, and as such, I would like to Thank my instructor and his assistants and also everyone else in the class for becoming the cohesive unit of support that we became Without Franklin, Alan and Tom, none of us would be where we are today. Thank you all.</p>
				</div>		
			</div>
		)
	}
}

export default AboutMe
