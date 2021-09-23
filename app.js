var express = require("express"); 
const path = require('path');
const cfenv = require('cfenv');

var app  =  express(); 
var appEnv = cfenv.getAppEnv();
var url = process.env.url
app.set('port', (process.env.PORT || 9981))
app.use(express.static(__dirname + '/images'))


/*
app.get("/getCall", function(req,res){ 
console.log("GET Method caled");
console.log(__dirname);

res.send("<h2>Welcome to Node JS express app</h2>"+appEnv.url+appEnv.port+port+process.env.LOGNAME);

}).listen(9009);
console.log(__dirname+"/images/mylandmarklogo.png");
*/
app.get('/landmarktechnologies', function(request, response) {
    //response.send("<h2><center>Welcome to Node JS app develpoed by MyLandmarkTech</h2>");
    response.write("<h2><center><u>Node JS  Application </u></center></h2>");
	
    response.write("<h2><center>Welcome to  Landmark Technologies. Please Contact +14372152483 for more information or send an email to info@mylandmarktech.com <center></h2>" );
    response.end();
    
  })
 

//app.get("/html", function(req,res){
app.get("/html", function(req,res){
    res.set("Content-Type","text/html");
    //res.contentType("html") ; 
    res.write("<h2>Welcome</h2>");
    res.write("<h2>/html call</h2>");
    //must end 
    res.end();
    
    });
    app.get("/jsonData", function(req,res){
        res.type('json');
        //res.type('application/json');
        //res.json({'name': 'S. Legah'});
        res.send({
		'name': 'Landmark Technologies',
		'technology': 'DevOps',
		'contact' : '+14372152483',
		'email': 'info@mylandmarktech.com'
	            });
        
        });
app.get("/queryparam", function(req,res){
//res.send(req.query);
res.send(req.query.key + ": " + req.query.name);
});

app.get("/status-code-404", function(req, res) {
    //set content-type to application/json
    //res.sendStatus(404);
      res.status(404).send('Sorry, we cannot find that!');
})

app.get("/status-code-500", function(req, res) {
    //set content-type to application/json
    //res.sendStatus(500);
   res.status(500).send('Internal Server Error – custom message');
})

app.get('/redirect', function(req, res) {
    //Send status 300
        res.redirect('http://mylandmarktech.com');
    });
    
 
    app.listen(app.get('port'), function() {
        console.log("Node JS app is running at http://localhost:" + app.get('port') +"/landmarktechnologies");
      })
    




