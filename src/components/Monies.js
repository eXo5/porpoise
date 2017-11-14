import React, {Component} from 'react'
import {Input, Button } from 'react-materialize'
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
			         <Parallax strength={300}>
          <Background>
            <img src="/images/moonstars.jpg"/>
            <div style={{
               width: 800, 
               height: 300, 
               backgroundColor: '#450093'
              }}></div>
            <img src="/images/withourplanetsaligned.jpg"/>
          </Background>
          <h1>something else</h1>
        </Parallax>
			</div>
		)
}

}

export default Payment