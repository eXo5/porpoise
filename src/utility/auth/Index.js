const express = require("express");
const router = express.Router();
const User = require("../db/models/user");

const passport = require("../passport");

//ALL THESE ROUTES ARE PREFACED WITH /AUTH

router.get("/user", (req, res, next) => {
	//router.get("/auth/user")
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user})
	} else {
		return res.json({user: null})
	}
})
	
router.post("/login/", passport.authenticate("local"), (req, res) => {
	//router.post("/auth/login")
	res.json({user: {email: req.user.email, _id: req.user._id} })	
})

router.post("/logout", (req, res) => {
	//router.post("/auth/logout")
	if (req.user) {
		req.session.destroy()
		res.clearCookie("connect.sid") //clean up!
		return res.json({ msg: "Logging Out" })
	} else {
		return res.json({ msg: "No user to log out" })
	}
})

router.post("/api/new/user", (req, res) => {
	//router.post("/auth/api/new/parent")
	const { email, password, firstName, lastName } = req.body
	console.log(req.body)
	//ADD VALIDATION
	console.log(password)
	const newUser = new User({ email, password, firstName, lastName })
	newUser.save((err, savedUser) => {
		if (err) return res.json(err)
			return res.json(savedUser)
	})
})

module.exports = router