var logger = require('morgan');
var http = require('http');
var bodyParser = require('body-parser');
var express = require('express');
var router = express();
var titles;
var app = express();
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));
var server = http.createServer(app).listen(2000);
var request = require('request');
app.get('/',(req,res)=>{
	res.send("server ok");
});
// Đây là đoạn code để tạo webhook
app.get("/webhook",function(req,res){
if (req.query[hub.verify_token]==='1111') {
	res.send(req.query['hub.challenge']);
}
res.send('Loi cai me gi ay');
});


app.set('port', process.env.OPENSHIFT_NODEJS_PORT || process.env.PORT || 3002);
app.set('ip', process.env.OPENSHIFT_NODEJS_IP || process.env.IP || "127.0.0.1");

server.listen(app.get('port'), app.get('ip'), function() {
  console.log("Chat bot server listening at %s:%d ", app.get('ip'), app.get('port'));
});