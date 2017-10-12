import axios from 'axios'
var fs = require('fs')
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
		(!qCount ? qCount = "10" : qCount = qCount);
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

	checkPics: function(dir){
		//doesn't fucking work
		var _getAllFilesFromFolder = function(dir) {
    var results = [];

    fs.readdirSync(dir).forEach(function(file) {

        file = dir+'/'+file;
        var stat = fs.statSync(file);

        if (stat && stat.isDirectory()) {
            results = results.concat(_getAllFilesFromFolder(file))
        } else results.push(file);

    });

    return results;

};
	},

	getPics: function(){
		//didn't fucking work before the one before this one didn't fucking work.
		var myfiles = [];

		fs.read('../images/', function (err, files) { if (err) throw err;
  files.forEach( function (file) {
    myfiles.push(file);
  });
  console.log(myfiles);
  return myfiles;
});
	}
}

export default helper