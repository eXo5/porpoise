import React, {Component} from 'react'
import helper from '../utility/helper/helper'

class Trivia extends Component {
	constructor(props){
		super(props)
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
				return qList.push(element)
			})
			//console.log(qList)
			//console.log("^^^qList")
			console.log(results)
			console.log("^^RESULTS^^")
		})
		this.setState({triviaQs: qList});
	}
componentDidUpdate(){
				console.log(this.state.triviaQs)
				console.log("^^^state.triviaQs")
}
	render() {
		console.log(this.state.triviaQs)
		console.log("am I fucking stupid")
				const showQs =  this.state.triviaQs.map((element, i ) => {
					console.log(element.type)
					return(
						<div key={i}>
							<p>{element.category}</p>
						</div>	
					)
	})
				var showQ1 = () => { 
					return ( <h1>{this.state.triviaQs[0].category}</h1>
						)
				}

	return (
			<div>
				{showQs}
			</div>	
		
	)
	}
}

export default Trivia