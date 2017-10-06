// Include Server Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var logger = require("morgan");
var mongoose = require("mongoose");
// ---  passport/session and database
var session = require("express-session");
var MongoStore = require("connect-mongo")(session);
var dbConnection = require("./src/utility/db");
var passport = require("./src/utility/passport");
var User = require("./src/utility/db/models/user.js")
//import mongoose connection
require("./src/utility/db/index.js");
require("./src/utility/db/models/user.js");

// --- end passport/session reqs;
// Create express app
var app = express();
// Sets initial port to environment variable or 3001 for localhost proxy. 
var PORT = process.env.PORT || 3001;
// Run Morgan and bodyParser for readability.. among other things.
app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// use sessions
app.use(
	session({
		secret: process.env.APP_SECRET || "this is the default passphrase",
		store: new MongoStore({ mongooseConnection: dbConnection}),
		resave: false,
		saveUninitialized: false
	})
)
// ==== testing middleware ====
app.use(function(req, res, next) {
	console.log("=== passport user ===");
	console.log(req.session);
	console.log(req.user);
	console.log("=== END ===");
	next()
})
app.use(passport.initialize())
app.use(passport.session())
// === if production environment
if(process.env.NODE_ENV === 'production') {
	const path = require("path")
	console.log("YOU ARE IN THE PRODUCTION ENV")
	app.use("/static", express.static(path.join(__dirname, + "../build/static")))
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, '../build/'))
	})
}
// Express app ROUTING
app.use("/auth", require("./src/utility/db/auth"))//routes for authentication
require("./src/utility/routes/router.js")(app, passport)//routes
//set the static build.
app.use(express.static("build"));

//-------------------------------------------------

// -------------------------------------------------

// Starting our express server
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
