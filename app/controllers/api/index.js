const jwt = require("jsonwebtoken");
const env = process.env.NODE_ENV === "production" ? process.env : require("dotenv").config().parsed;
let models = require("../../../db/models");
let { authValidator } = require("../../validators");

let jwtSignIn = (res, user) => {
	jwt.sign({ user }, env["SESSION_KEY"], (error, token) => {
		if (error) {
			res.status(400).json({ error }).end();
		}
		user.createToken({ token });
		res.json({ token }).end();
	});
};

module.exports = {
	register: (req, res) => {
		authValidator.register(req.body).then((result) => {
			models.user.create(result)
				.then((user) => jwtSignIn(res, user))
				.catch((error) => res.status(400).json({ error }).end());
		}).catch((error) => res.status(400).json({ error }).end());
	},
	login: (req, res) => {
		authValidator.login(req.body).then((result) => {
			models.user.attemptAuth(result).then((user) => {
				if (user) {
					user.getToken().then(({ token }) => {
						if (token) {
							res.json({ token }).end();
						} else {
							jwtSignIn(res, user);
						}
					})
				} else {
					res.status(400).json({ error: "Invalid credentials." }).end();
				}
			})
		})
	},
	profile: (req, res) => req.user,
	error: (req, res) => res.status(400).json("Error").end()
};
