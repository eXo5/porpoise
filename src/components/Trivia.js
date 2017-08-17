import React, {Component} from 'react'
import helper from '../utility/helper/helper'

class Trivia extends Component {
	constructor(props){
		super(props)
		this.state = {

			triviaQs: [], 
			triviaQ1: "",
			triq: [1, 2, 3, 4, 5]
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

// showQs = () => { this.state.triviaQs.map((element, i ) => {
// 					console.log(element.type)
// 	return(
// 						<div key={i}>
// 							<p>{element.category}</p>
// 						</div>	
// 					)			
// 	})
// }
componentDidMount(){
	var qList = []
	class Question {
		constructor(category, type, difficulty, correct_answer, incorrect_answers, question) {
				this.category = "",
				this.type = "",
				this.difficulty = "",
				this.correct_answer = "",
				this.incorrect_answers = [],
				this.question = ""
			}
		};
	helper.getQs()
		.then(function(results) {
			results.data.results.map(function(element, i) {
				
				var	newQuestion = new Question(
						`${element.category}`,
						`${element.type}`,
						`${element.difficulty}`,
						`${element.correct_answer}`,
						[],
						`${element.question}`
					)
					element.incorrect_answers.map(function(element, i){
						newQuestion.incorrect_answers.push({element})
					})
					qList.push(newQuestion)
				})								
			//console.log(qList)
			//console.log("^^^qList")
			//console.log(results)
			//console.log("^^RESULTS^^")
		})
		this.setState({triviaQs: qList})
}


componentDidUpdate(){
				console.log(this.state.triviaQs)
				console.log("^^^state.triviaQs")
				console.log(this.triq)
}

	render() {
		console.log(this.state.triviaQs)
		console.log("am I fucking stupid")

			var showQs = this.state.triviaQs.map((element, i) => {
				return(
					<div key={i}>
						<p>{this.state.triviaQs[`${i}`].category}</p>
					</div>
					)
			})

				let showNums = this.state.triq.map((element, i) => {
					return(
						<p>{element}</p>
						)
				})
	return (
			<div>
				{showQs}
			</div>	
		
	)
	}
}

export default Trivia