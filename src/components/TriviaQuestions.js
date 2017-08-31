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
			answeredQuestion: "",

		}
	}

// timerCountDown = () => {
// 	var timer = this.state.timer;
// function decrement = () => {
// 	intervalId = setInterval(function(){--timer}, 1000)
// 	this.setState({timer: timer})
// }
	
// }
getInitialState(props){
	console.log("getInitialState")
		this.setState({question:this.props.question})
		console.log(this.props.question)
	
}

componentDidMount(props){
	console.log(this.props)
	console.log(this.state)
	this.setState({question: this.props.question,
	})
}

// componentWillReceiveProps(nextProps){
// 	console.log(this.nextProps)
// 	console.log("^^nextProps")
// 	if (this.props.showQs === true){ 
// 		var theAnswers = []
		
// 		if (nextProps.question.type === "multiple") {
// 				for (var i = 0; i < nextProps.question.incorrect_answers.length; i++){
// 					theAnswers.push(nextProps.question.incorrect_answers[i]);
// 				}
// 				theAnswers.push(nextProps.question.correct_answer)
// 				console.log(theAnswers.sort())
// 				this.setState({
// 				question:nextProps.question.question,
// 				answers: theAnswers.sort(),
// 				correct: nextProps.question.correct_answer,
// 				type: nextProps.question.type
// 				})
// 			}
// 		else if (nextProps.question.type === "boolean"){
// 			theAnswers.push("true", "false")
// 			this.setState({
// 				question: nextProps.question.question,
// 				answers: theAnswers,
// 				correct: nextProps.question.correct_answer,
// 				type: nextProps.question.type
// 			})
// 		}
// 	}
// }

componentDidUpdate(){
	console.log(this.state.question)
	console.log(this.state.correct)
}

selector = (event) => {
	var answer = event.target.value
	console.log(answer)
	this.setState({answeredQuestion: answer})
}

checkRight = (event) => {
	event.preventDefault();
	alert("ok")
	var x = document.getElementsByName("answer1");
	var i;
	for (i = 0; i < x.length; i++) {
    if (x[i].type == "radio") {
        console.log(x[i])
        console.log(x[i].hasAttribute("checked"))
        x[i].setAttribute("checked", false);
        x[i].removeAttribute("checked");
    }
	}
	//INSERT THE setParentState to increase counter because WHHHHATTT THIS SHIT WORKS.
}
render(){
		if (this.props.showQs === false) {
		return(
			<p></p>
			)
	}
	// else if (this.props.showQs === true) { 
	// 	let showInputs = this.state.answers.map((element, i) => {	
	// 		return(	
	// 				<div key={i}>
	// 					<Input name="answer1" type="radio" onClick={this.selector} value={`${element}`} label={`${element}`} />
	// 					<br />
	// 					<br />
	// 				</div>
	// 			)
	// 		})
		
	// 	return (
	// 		<div className="trivQuests">
	// 		<p>{this.state.timer}</p>
	// 			<p>{this.state.question}</p>
	// 			<form>
	// 				<Row>
	// 					<Col s={6}>
	// 						{showInputs}
	// 					</Col>
	// 				</Row>
	// 					<Button onClick={this.checkRight}>Submit Answer</Button>
	// 			</form>		

	// 		</div>	
	// 		)
	// 	//}
	// }//end else if showQs === true
	
	}
}

export default TriviaQuestions