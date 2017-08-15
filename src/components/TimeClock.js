import React, {Component} from 'react'

class TimeClock extends Component {
	constructor(){
		super()
		this.state = {
			timeNow: new Date(),
			year: new Date().getYear(),
			month: new Date().getMonth(),
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			day: new Date().getDate(),
			hour: new Date().getHours(),
			min: new Date().getMinutes(),
			sec: new Date().getSeconds(),
			ms: new Date().getMilliseconds()
		}
	}

componentDidMount(){
	this.timerID = setInterval(() => this.showTimeNow(), 1)
}
componentWillUnmount(){
	clearInterval(this.timerID)
}
componentDidUnmount() {

}

 showTimeNow = () => {
	var now = this.state.timeNow;
	var milli = now.getMilliseconds(),
	sec = now.getSeconds(),
	min = now.getMinutes(),
	hour = now.getHours(),
	month = now.getMonth(),
	day = now.getDate(),
	year = now.getYear();
	var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	this.setState({timeNow: new Date(),	year: new Date().getYear(),
			month: new Date().getMonth(),
			months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
			day: new Date().getDate(),
			hour: new Date().getHours(),
			min: new Date().getMinutes(),
			sec: new Date().getSeconds(),
			ms: new Date().getMilliseconds() })
	return (
		<div id="timedate">
		<p id="mon">{months[month]} </p>
    <a id="d">{this.state.day}</a>,
    <a id="y">{this.state.year}</a><br />
    <a id="h">{new Date().getHours()}</a> :
    <a id="m">{new Date().getMinutes()}</a>:
    <a id="s">{new Date().getSeconds()}</a>:
    <a id="mi">{new Date().getMilliseconds()}</a>
  </div>
		)

}

render(){
	return(
		<div>
	{setInterval(this.showTimeNow, 1)}
		</div>
		)
}
}
export default TimeClock
// tick = () => {
// 	const element = (
// 			<div>
// 				<h3>{Date().toLocalTimeString()}</h3>
// 			</div>	
// 		)


//   }
