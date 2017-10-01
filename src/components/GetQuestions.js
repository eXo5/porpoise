import React, {Component} from 'react'
import { Input, Button, Row, Col } from 'react-materialize'
import helper from '../utility/helper/helper'
import TriviaQuestions from './TriviaQuestions'


class GetQuestions extends Component {
	constructor(props){
		super(props)
		this.state = {
			qCount: 0,
			category: "",
			difficulty: "",
			type: "",
		}
	}

handleChange = (event) => {
	const target = event.target;
	  var name = event.target.name;
    if (target.type === 'checkbox') { 
    var value =	target.checked;
    }
    	else if (target.type === "number") { 
    		var value = Math.abs(event.target.value);
    	}
    	else { 
    		var value = event.target.value;
    	}
    	
    this.setState({
      [name]: value
    });
}
	
	getCustomQs = (event) => {
		event.preventDefault();
		console.log("whattup")
		helper.getCustomQs(this.state.qCount, this.state.category, this.state.difficulty)
			.then(
				(results)=> console.log(results)
			)
	}

componentDidMount(){

console.log("GetQuestions")

    } 


componentDidUpdate(){
			
}

	render() {
		return (
			<div id="questionList">
				<form>
					<Row>
						<Col s={6}>
							<Input 
							type="number" 
							label="How many questions would you like?" 
							value={this.props.qCount} 
							name="qCount" 
							onChange={this.props.handleChange} 
							
							/>
						<br />
						<br />

						<Input 
						type="select" 
						label="Any particular category of question?"
						name="category" 
						value={this.props.category}
						onChange={this.props.handleChange} 
						>
	          	<select value={this.state.category} onChange={this.handleChange} />
	            	<option value="9">General Questions</option>
	            	<option value="10">Entertainment: Books</option>
	            	<option value="11">Entertainment: Film</option>
	            	<option value="12">Entertainment: Music</option>
	            	<option value="13">Entertainment: Musicals & Theater</option>
	            	<option value="14">Entertainment: Television</option>
	            	<option value="15">Entertainment: Video Games</option>
	            	<option value="16">Entertainment: Board Games</option>
	            	<option value="17">Science and Nature</option>
	            	<option value="18">Science: Computers</option>
	            	<option value="19">Science: Mathematics</option>
	            	<option value="20">Mythology</option>
	            	<option value="21">Sports</option>
	            	<option value="22">Geography</option>
	            	<option value="23">History</option>
	            	<option value="24">Politics</option>
	            	<option value="25">Art</option>
	            	<option value="26">Celebrities</option>
	            	<option value="27">Animals</option>
	            	<option value="28">Vehicles</option>
	            	<option value="29">Entertainment: Comics</option>
	            	<option value="30">Science: Gadgets</option>
	            	<option value="31">Entertainment: Japanese Anime & Manga</option>
	            	<option value="32">Entertainment: Cartoon & Animations</option>
	           </Input>

	           <br />
	           <br /> 
	           <Input 
	           type="select"
	           label="Difficulty?"
	           name="difficulty" 
	           value={this.props.difficulty}
	           onChange={this.props.handleChange}  
	           >
	           <select 
	           value={this.props.difficulty} 
	           onChange={this.props.handleChange} 
	           />
	           	<option value="easy">Easy</option>
	           	<option value="medium">Medium</option>
	           	<option value="hard">Hard</option>
	          </Input>

	          <br /> 
	          <br /> 

						<Button onClick={this.props.questionHandler}>Get Questions</Button>
					</Col>
				</Row>	
				</form>

			</div>	
			)
		}
}

export default GetQuestions