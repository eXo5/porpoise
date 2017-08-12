const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require("../db/models/user");

passport.serializeUser((user, done) => {
	console.log(user.id)
	console.log(user.email)
	console.log("^^^SERIALIZATION^^^")
	done(null, {_id: user._id, email: user.email }) //take out email in production?
	//done(null, { _id: user._id, email: user.email }) // take out email in production
})

passport.deserializeUser((id, done) => {
	User.findOne({_id: id }, "email", (err, user) => {
		(err) ? console.log(err) : console.log(user);
		// if (!user){
		// 	Child.findOne({_id: id }, "email", (err, user) => {
		// 		done(null, user)
		// 	})
		// }else{
			done(null, user)
		//}
	})
})


passport.use("local",
	new LocalStrategy(
	{
		usernameField: "email",
		passwordField: "password"
	},
	function(username, password, done) {
		User.findOne({email: username}, (err, userMatch) => {
			if (err) {
				return done(err)
			}
			if(!userMatch) {
				return done(null, false, {message: "Incorrect Username"})
			}
			if(!userMatch.checkPassword(password)) {
				return done(null, false, {message: "Incorrect password"})
			}
			return done(null, userMatch)
			
			})
		}
	)
)

module.exports = passport