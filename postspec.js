var request = require('request');

request("http://localhost:8080/posts", function(err, response, body) {
 var checkJSON = function() {
  //if body isn't valid JSON, this will throw an error and break stuff
  JSON.parse(body);
 }
 expect(checkJSON).not.toThrow();
 done();
});

request({
	uri: url+"/posts",
	method: 'POST',
	json: {
		"title": "testtitle",
		"description": "testdescription",
		"location": "testlocation",
		"date": "testdate",
		"time": "testtime"
	}
}, function(err, response, body) {
	console.log("error");
}));