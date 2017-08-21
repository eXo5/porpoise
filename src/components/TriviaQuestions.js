import React, {Component} from 'react'
import {Row, Col, Form, Input, Button } from 'react-materialize'

class TriviaQuestions extends Component {
	constructor(props) {
		super(props)

		this.state = {
			timer: 15,
			type: "",
			question: "",
			answers: [],
			correct: "",
			answeredQuestion: ""
		}
	}

// timerCountDown = () => {
// 	var timer = this.state.timer;
// function decrement = () => {
// 	intervalId = setInterval(function(){--timer}, 1000)
// 	this.setState({timer: timer})
// }
	
// }



componentWillReceiveProps(nextProps){
	var theAnswers = []
	
	if (nextProps.question.type === "multiple"){
			for (var i = 0; i < nextProps.question.incorrect_answers.length; i++){
				theAnswers.push(nextProps.question.incorrect_answers[i]);
			}
			theAnswers.push(nextProps.question.correct_answer)
			console.log(theAnswers.sort())
			this.setState({
			question:nextProps.question.question,
			answers: theAnswers.sort(),
			correct: nextProps.question.correct_answer,
			type: nextProps.question.type
			})
		}
	else if (nextProps.question.type === "boolean"){
		theAnswers.push("true", "false")
		this.setState({
			question: nextProps.question.question,
			answers: theAnswers,
			correct: nextProps.question.correct_answer,
			type: nextProps.question.type
		})
	}	
}

componentDidMount(){
	console.log(this.state.question)
}

selector = (event) => {
	var answer = event.target.value
	console.log(answer)
	this.setState({answeredQuestion: answer})
}

checkRight = (event) => {
	event.preventDefault();
// var x = document.getElementsByName("answer1");
// var i;
// 	for (i = 0; i < x.length; i++) {
//     if (x[i].type == "radio") {
//         x[i].checked = false;
//     }
// 	}
}
render(){
	
	// if (this.state.type === "boolean"){
	// 	return (
	// 			<div className="trivQuests">
	// 				<p>{this.state.timer}</p>
	// 					<p>{this.state.question}</p>

	// 				<form>
	// 					<Row>
	// 						<Col s={6}>
	// 						<Input name="answer1" type="radio" onClick={this.selector} value={this.state.answers[0]} label={this.state.answers[0]} />
	// 						<Input name="answer1" type="radio" onClick={this.selector} value={this.state.answers[1]} label={this.state.answers[1]} />
	// 						</Col>
	// 					</Row>
	// 				</form>
	// 			</div>		
	// 		)
	// }
	// else if (this.state.type === "multiple") {	
		return (
			<div className="trivQuests">
			<p>{this.state.timer}</p>
				<p>{this.state.question}</p>
				<form>
					<Row>
						<Col s={6}>
						<Input name="answer1" type="radio" onClick={this.selector} checked="false" value={`${this.state.answers[0]}`} label={`${this.state.answers[0]}`} />
						<br />
						<br />
						<Input name="answer1" type="radio" onClick={this.selector} value={`${this.state.answers[1]}`} label={`${this.state.answers[1]}`} />
						<br />
						<br />
						<Input name="answer1" type="radio" onClick={this.selector} value={`${this.state.answers[2]}`} label={`${this.state.answers[2]}`} />
						<br />
						<br />
						<Input name="answer1"  type="radio" onClick={this.selector} value={`${this.state.answers[3]}`} label={`${this.state.answers[3]}`} />
						</Col>
					</Row>
						<Button onClick={this.props.checkIt}>Submit Answer</Button>
				</form>		
				{console.log(this.state.question)}
			</div>	
			)
		//}
	}
}

export default TriviaQuestions