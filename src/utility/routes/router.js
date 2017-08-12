var path = require("path");
var axios = require("axios");


var User = require("../db/models/user.js");


module.exports = function(app) {

app.get("/", function(req, res){
  res.sendFile(__dirname + "./public/index.html");
});

//Routes for new users and login/logout found in /auth/index.js
//route for viewing chores
// app.get("/api/get/pchores", function(req, res){
// 	Parent.find({_id: req.user.id})
// 	.populate("children")
// 	.populate("chores")
// 		.exec(function(err, doc) {
// 			if (err) {console.log(err)}
// 			else {
// 				console.log(doc[0])
// 				console.log("^^^DOC")
// 				//console.log(doc[0].chores)
// 				console.log("^^^CHORENAME?")
// 				res.send(doc)
// 			}
// 		})

// })

// app.post("/api/post/chores", function(req, res){
// //save something to a database and update it's reference in another Schema
// 	console.log(req.user);
// 	console.log("^^^req.user^^^")
// 	console.log(req.body)
// 	var choreName = req.body.choreName;
// 	var choreDesc = req.body.choreDesc;
// 	var choreValue = req.body.choreValue;
// 	var choreRegExp = choreName.replace(/ /g, "_");

// 	var dueDate = req.body.dueDate; 
// 	var chore = new Chore({ 
// 		choreName: choreRegExp,
// 		choreDesc: req.body.choreDesc,
// 		choreValue: req.body.choreValue,
// 		dueDate: req.body.dueDate
// 	})
// 	chore.save(function(err, doc){ 
// 		if(err){
// 			console.log(err);
// 			console.log("ERR^^^")
// 		}else{
// 			Parent.findByIdAndUpdate({_id: req.user._id}, {$push: {chores: doc}})
// 			.exec(function(err, doc){
// 				if (err) {console.log(err)}
// 					else{res.send(doc)}
// 			})
// 			console.log("new chore added");
// 		}
// 	})
//})//END api/post/chores

app.delete("/api/drop/:collection",function(req, res){
	var collection = req.params.collection;
	console.log(collection);
	collection.drop();
})



}