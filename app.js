var express = require("express");
var app = express();
var request = require('request');
app.set("view engine", "ejs");

app.use(express.static("public"));


app.get("/", function(req, res){
	res.send("Movie Home Page");
});


app.get("/search", function(req, res){
	res.render("search");
});






app.get("/results", function(req, res){
	request('https://jsonplaceholder.typicode.com/todos',function (error, response, body){
	if(!error && response.statusCode == 200){
		var parsedData = JSON.parse(body);
		
		res.render("index", {data: parsedData});
		}
	});
});


app.get("*", function(req, res){
	res.send("this url does not exisit on ths server");
})



app.listen(3000, function(){
	console.log("<h1>server started on port 3000!!</h1>");
})



