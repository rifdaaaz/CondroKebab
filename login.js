var express = require('express');
var bodyParser = require('body-parser');
var sessions = require('express-session');


var sessions;

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(sessions({
	secret: '@#$#%#nsdodaodm$%#@#4sdhbua'
}))

app.get('/login',function(req, resp){
	resp.sendFile(./files/login.html', {root: __dirname});
});

app.post('/login',function(req,resp) {
	resp.end(JSON.stringfy(req.body));
	if(req.body.username == 'admin' && req.body.password == 'admin'){
		session.id = req.body.username;
	}
	resp.redirect('/redirects');
});

app.get('/redirects', function(Req, resp) {
	if(session.id) {
		resp.redirect('/admin');
	} else {
		resp.end('Who are you??');
	}
})
app.listen(1337, function(){
	console.log('Listening at Port 1337');
});