import axios from 'axios'

var helper = {

	getQs: function(){
		return axios.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium")
			.then(function(results){
				return results;
			})
	}
}

export default helper