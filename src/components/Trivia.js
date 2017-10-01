import React, {Component} from 'react'
import {Switch, Route, Link, Redirect } from 'react-router-dom'
import {Button, Input} from 'react-materialize'
import helper from '../utility/helper/helper'
import Navi from './Navigator'
import GetQuestions from './GetQuestions'
import TriviaQuestions from './TriviaQuestions'

class Trivia extends Component {
	constructor(props){
		super(props)
		this.state = {
			//GetQuestions states
			qCount: 0,
			category: "",
			difficulty: "",

			//local states
			triviaQs: [],
			triviaanswers: [],
			triviaQ: [],

			//user response
			userPick: "",

			//TriviaQuestions props
			//THESE ARE USELESS NOW?!?!?
			showQs: false,
			counter: 0,
			wrongCount: 0,
			rightCount: 0,
			timer: 0,
			thisAnswer: ""
		}
	}

mapQs = () => {
return this.state.triviaQs.map((element, i) => {
	console.log(element.category)
	return(
			<span key={i}>
				<h2>element.category</h2>
			</span>
		)
	})

}

checkIt = (event) => {
	event.preventDefault();
	var checkCount = this.state.counter
	++checkCount
	this.setState({counter: checkCount})
	console.log(this.state.counter)	
	
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
 		const qList = [];
    helper.getCustomQs(this.state.qCount, this.state.category, this.state.difficulty)
        .then(results => {
            results.data.results.map(function(element, i) {
                qList.push(element)
            })
            // console.log(results)
            // console.log("^^RESULTS^^")
            console.log(qList)
            console.log("^^qList")
        }).then((response) => {
            console.log("qList in CDM then")
             console.log(qList)
            this.setState({
                triviaQs: qList,
                qCount: qList.length
          		})
        }).then(()=>{
        	console.log("2nd to last .then getCustomQs from trivia.js")
        }).then(()=>{
        	var newArr = [];
        	var newAnsArr= [];
        	newArr.push(this.state.triviaQs[0])
        	console.log(newAnsArr)
        	console.log(newArr)
        	this.setState({
        		triviaQ: newArr,
        		showQs: true
        	})
        })
  //Called by GetQuestions
}

componentDidMount(){
  
  }

componentShouldUpdate(prevState, nextState){
if (prevState != nextState){

	}
}

componentDidUpdate(prevProps, prevState){
	 if (!!this.state.triviaQs[this.state.counter]){
   	if (this.state.qCount == this.state.counter) {
   		alert("Hey look at this shit")
  	 }
    }
	}

userPicked = (event) => {

	this.setState({
		userPick: event.target.value
	})
console.log(this.state.userPick)
	}

checkRight = (event) => {
	event.preventDefault();
	var x = document.getElementsByName("answer");
	var i;
	var count = this.state.counter;
	var rCount = this.state.rightCount;
	var wCount = this.state.wrongCount;

	if (!!this.state.userPick){

	for (i = 0; i < x.length; i++) {
    if (x[i].type == "radio") {
       x[i].setAttribute("checked", false);
       x[i].removeAttribute("checked");
    }
    if(this.state.userPick === this.state.triviaQs[this.state.counter].correct_answer){
    	++rCount;
    	this.setState({
    		rightCount: rCount 
    	})
    	break;
    }else if (this.state.userPick != this.state.triviaQs[this.state.counter].correct_answer) {
    	++wCount;
    	this.setState({
    		wrongCount: wCount
    	})
    	break;
    }
	}//remove the checkmark
		this.setState({
 			counter: ++this.state.counter,
 			userPick: null
		})
	}
}
	render() {
		if (!!this.state.triviaQs[this.state.counter]) {
			var answers = []
			let initAnswers = this.state.triviaQs[this.state.counter].incorrect_answers.map(element =>{
				answers.push(element)
			});
			answers.push(this.state.triviaQs[this.state.counter].correct_answer)
			answers.sort();
			console.log(answers)
			let showInitializedAnswers = answers.map((element,i) => {
				return <div key={i}>
									<Input name="answer"
												 type="radio"
												 onClick={this.userPicked}
												 value={`${element}`}
												 label={`${element}`}
												 />
												 <br />
												 <br />
								</div>
			})
			return (
					<div>
					<p>Right Answers: {this.state.rightCount}</p>
					<p>Wrong Answers: {this.state.wrongCount}</p>

					<p>{this.state.triviaQs[this.state.counter].question}</p>
										{showInitializedAnswers}
					<Button onClick={this.checkRight}>Next Question</Button> 
		{/*
				<TriviaQuestions 
				showQs={this.state.showQs} 
				question={this.state.triviaQ[0]} 
				checkIt={this.checkIt}
		
				 /> 
		*/}
					</div>	
				
				)
		}
		else {
			return (
				<div>
					<Navi />
		
					<GetQuestions 
					questionHandler={this.getCustomQs} 
					handleChange={this.handleChange} 
					qCount={this.state.qCount} 
					category={this.state.category} 
					difficulty={this.state.difficulty} 
					/>

				
				</div>

				)
		}
	}
}

export default Trivia