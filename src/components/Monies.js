import React, {Component} from 'react'
import {Input, Button } from 'react-materialize'

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
				<form>
					<Input
					 type="text"
					 value={this.state.firstName}
					 onChange={this.handleChange}
					 	/>
					 	<Button>Submit</Button>
					 </form>	
			</div>
		)
}

}

export default Payment