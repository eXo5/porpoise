import React, {Component} from 'react'
import {Switch, Route, Link, Redirect } from 'react-router-dom'
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

			//TriviaQuestions props
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
        .then(function(results) {
            results.data.results.map(function(element, i) {
                qList.push(element)
            })
            
            // console.log(results)
            // console.log("^^RESULTS^^")
        })
        .then(response => {
            // console.log("qList in CDM then")
            // console.log(qList)
            this.setState({
                triviaQs: qList,
                	showQs: true
            })
        })

}

componentDidMount(){
   
    } 


componentDidUpdate(){
				console.log(this.state.triviaQs)
				console.log("^^^state.triviaQs")

}
//this is written backwards - questions/then getquestions
	render() {
		if (this.state.showQs === true) {
			return (
		
					<div>
					
		
		
				<TriviaQuestions 
				showQs={this.state.showQs} 
				question={this.state.triviaQs[this.state.counter]} 
				checkIt={this.checkIt}
		
				 /> 
		
					</div>	
				
				)
		}
		else if (this.state.showQs === false){
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