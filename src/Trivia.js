import React, {Component} from 'react'
import helper from './utils/helper/helper'

class Trivia extends Component {
	constructor(){
		super()
		this.state = {
			triviaQs: [], 
			triviaQ1: ""

		}
	}

mapQs = () => {
return this.state.triviaQs.map((element, i) => {
	return(
		<span key={i}>
			<h2>{element.category}</h2>
		</span>
		)
	})

}

componentDidMount(){
	var qList = [];
	helper.getQs()
		.then(function(results) {

			results.data.results.map(function(element, i) {
				qList.push(element)
			})
			console.log(qList)
			console.log("^^^qList")
			return console.log(results)
		})
		this.setState({triviaQs: qList});

	}

	render(){
				console.log(this.state.triviaQs)
							console.log("^^^state.triviaQs")
				var showQs = this.state.triviaQs.map((element, i) => {
	return(
		<div key={i}>
			<h2>{element.category}</h2>
		</div>
		)
	})

	return(
		<div>
			<h1> Are you fucking kidding me? </h1>
			<div>
				{showQs}
			</div>	
		</div>
	)
	}
}

export default Trivia