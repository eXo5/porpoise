import axios from 'axios'

var helper = {

	getQs: function(){
		return axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium")
			.then(function(results){
				return results;
			})
	},

	getCustomQs: function(qCount, category, difficulty) {
		var qCount;
		var category;
		var difficulty;
		//more than one way to skin a cat &#9660.
		(qCount ===  "0" ? qCount = 10 : qCount = qCount);
		(!category ? category = "9" : category = category);
		(!difficulty  ? difficulty = "medium" : category = category);
		console.log(qCount)
		console.log(category)
		console.log(difficulty)
		return axios.get("https://opentdb.com/api.php?amount=" + qCount + "&category=" + category + "&difficulty=" + difficulty)
		.then(function(results) {
			return results
		})
	},

	getImages: function(){
		return axios.get("/about-life")
			.then(function(results){
				return results
			})
	}
	
}

export default helper