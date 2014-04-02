var EventPost = require('../models/post.js');

//create function to list posts
var listEvents = function (req, res) {
	var filter = {};
	if(req.params.title) {
		filter = {title: req.params.title};
	}
	EventPost.find(filter)
	.select('title description location date')
	.exec(function(err, posts) {
		res.send(posts);
	});
};


//create function to save posts

var saveEvent = function (req, res) {
	var newPost = new EventPost({
		title: req.body.title,
		description: req.body.description,
		location: req.body.location,
		date: req.body.date
	});
	newPost.save(function (err) {
		res.send({success: true});
	});
	console.log(newPost);
};

module.exports = {
	get: listEvents,
	post: saveEvent
};