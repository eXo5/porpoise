import React, {Component} from 'react'
import helper from '../utility/helper/helper'

class Trivia extends Component {
	constructor(props){
		super(props)
		this.state = {

			triviaQs: [],
			counter: 0,
			wrongCount: 0,
			rightCount: 0,
			timer: 0
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

componentDidMount(){
    const qList = [];
    let number = 0
    helper.getQs()
        .then(function(results) {
            results.data.results.map(function(element, i) {
                qList.push(element)
            })
            
            // console.log(results)
            // console.log("^^RESULTS^^")
        }).then(response => {
            console.log("qList in CDM then")
            console.log(qList)
            this.setState({
                triviaQs: qList
            })
        })
    } 


componentDidUpdate(){
				console.log(this.state.triviaQs)
				console.log("^^^state.triviaQs")

}

	render() {
		console.log(this.state.triviaQs)
		console.log("am I fucking stupid")

			var showQs = this.state.triviaQs.map((element, i) => {
				var answers = [];
				if (element.type === "boolean") {
					console.log("hey that's bool")
				}

				if(element.type === "multiple") {
					console.log("Hey it's more than one ")
				}
				console.log(element.type)
				return(
					<div key={i}>
						<p>{element.category}</p>
						<p>{element.question}</p>
					</div>
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