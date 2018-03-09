
// load in express module
var express = require('express');

//load in body-parser module
var bodyParser = require('body-parser');

//load in ejs
var ejs = require('ejs');
// create a new express instance called app
var app = express();

//tell the app to use ejs as its veiw engine
app.set('view engine', 'ejs');

// for all static folders (html,css) look in the folder called public
app.use(express.static('public'));

//tell the app to convert info into json code
app.use(bodyParser());

//when we recive a GET request to the home route, send back the html file 
app.get('/', function(req, res) {
	res.sendFile(__dirname + '/public/index');
});

// when we add /about to the url we send back 'this is the about page'
app.get('/about', function(req, res) {
	res.send(__dirname + '/public/about');
});

//when we add /contact to the url we send back 'this is the contact page'
app.get('/contact', function(req, res) {
	res.send(__dirname + '/public/contact');
});


app.post('/process-form', function(req, res) {
	var name = req.body.userName;
	var email = req.body.userEmail;
	var phone = req.body.userPhone;
	var message = req.body.userMessage;

	//send back resopnce to client
	res.send(
		"Thanks for the submission. You entered the following info... Name: " + name
		+ " Email: " + email
		+ " Phone: " + phone
		+ " Message " + message);
});


// here we confirm the app is on port 3000
app.listen(3000, function() {
	console.log('app is listening on port 3000')
});