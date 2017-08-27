import React, {Component} from 'react'
import { Input, Button } from 'react-materialize'
import helper from '../utility/helper/helper'


class GetQuestions extends Component {
	constructor(props){
		super(props)
		this.state = {
			triviaQs: [],
			triviaanswers: [],
			qCount: 0,
			value: "",
			wrongCount: 0,
			rightCount: 0,
			timer: 0,
			thisAnswer: ""
		}
	}

changeQCounter = (event) => {
	 const target = event.target;
    var value = target.type === 'checkbox' ? target.checked : Math.abs(event.target.value);
    var name = event.target.name;
    this.setState({
      [name]: value
    });
}

componentDidMount(){

console.log("hey")

    } 


componentDidUpdate(){
			
}

	render() {
		return (
			<div>
				<form>
					<Input type="number" label="How many questions would you like?" value={this.state.qCount} name="qCount" onChange={this.changeQCounter} />
					<Input type="select" label="Any particular category of question?">
          	<select value={this.state.value} onChange={this.handleChange}>
            	<option value="9">General Questions</option>
            	<option value="10">Entertainment: Books</option>
            	<option value="coconut">Entertainment: Film</option>
            	<option value="mango">Entertainment: Music</option>
          	</select>
        	
        </Input>
					<Button onChange={this.changeQCounter}>Get Questions</Button>
				</form>
			</div>	
			)
		}
}

export default GetQuestions