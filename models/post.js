var mongoose = require('mongoose');

var Posts = mongoose.model('Posts',
	new mongoose.Schema({
		title: { type: String },
		description: { type: String },
		location: { type: String },
		date: { type: Date, default: Date.now }
	}));


module.exports = Posts;