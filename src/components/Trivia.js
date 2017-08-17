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
				console.log(this.triq)
}

	render() {
		console.log(this.state.triviaQs)
		console.log("am I fucking stupid")

			var showQs = this.state.triviaQs.map((element, i) => {
				return(
					<div key={i}>
						<p>{element.category}</p>
						<p>{element.question}</p>
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