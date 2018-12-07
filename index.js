//console.log("Hello Node");
// var os = require("os");
// var message = "The platform is ";
// function main(){
//     console.log(message + os.platform());
// }
// main();

// var express = require("express");
// var app = express();

// app.get("/", function(req, res){
//     res.send("Hello world");

// });

// app.listen(3000,function(){
//     console.log("Example is running on port 3000");
// });

var express = require("express");
var app = express();
app.get("/",function(req,res){
    res.send("<h1>Hello world</h1>");
});
app.get("/name/:name", function(req,res){
    var n = req.params.name;
    res.send("<h1>Hello " + n + "</h1>");
});
app.get("/:name/:surname/", function(req,res){
    var n = req.params.name;
    var s = req.params.surname;
    res.send("<h1>Hello " + n + " " + s +"</h1>");
});

app.get("/google", function(req,res){
    var g = res.redirect('http://google.com');
    res.send("<h1>Hello " + g + "</h1>");
});
app.get("/google/:search", function(req,res){
    var g = req.params.search;
    res.redirect('http://google.com/search?q='+g);
});
app.listen(3000,function(){
    console.log("Example is running on port 3000");
});
