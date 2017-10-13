import React, {Component} from 'react'
import {Modal, Row, Input, Button} from 'react-materialize'
import helper from '../utility/helper/helper'
import Navi from './Navigator'
import axios from 'axios'
class Contact extends Component {
	constructor(){
		super()
		this.state = {
			firstName: "",
			email: ""
		}
}

handleChange = (event) =>{
	var newState = {};
	newState[event.target.id] = event.target.value;
	this.setState(newState)
}

signupClick = (event) => {
		
		axios.post('/', {
			firstName: this.state.firstName,
			email: this.state.email			
		}
			)
  .then((response) => {
    console.log(response);
  })
  .catch((error)=> {
    console.log(error);
  	});
	}	
	

render() {

	return (
		<div>
			<Navi />
		<p>Mike.Yingling15@Gmail.com</p>
		<br />
		<br />
		<p>Please <Modal
		id="signupModal"
		header={<p className="redText">Subscribe</p>}
		trigger={<a>sign up </a>}>
		<Row>
			<form action="/index.php" method="post">
				<Input className="redText" s={6} label="First Name" onChange={this.handleChange}/>
				<Input className="redText" s={6} label="Email" onChange={this.handleChange}/>
				<Button onClick={this.signupClick}>Submit</Button>
			</form>
		</Row>
		</Modal>
for updates to the site!</p>
		</div>
		)
	}
}

export default Contact