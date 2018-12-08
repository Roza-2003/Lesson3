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

// var express = require("express");
// var app = express();
// app.get("/",function(req,res){
//     res.send("<h1>Hello world</h1>");
// });
// app.get("/name/:name", function(req,res){
//     var n = req.params.name;
//     res.send("<h1>Hello " + n + "</h1>");
// });
// app.get("/:name/:surname/", function(req,res){
//     var n = req.params.name;
//     var s = req.params.surname;
//     res.send("<h1>Hello " + n + " " + s +"</h1>");
// });

// app.get("/google", function(req,res){
//     var g = res.redirect('http://google.com');
//     res.send("<h1>Hello " + g + "</h1>");
// });
// app.get("/google/:search", function(req,res){
//     var g = req.params.search;
//     res.redirect('http://google.com/search?q='+g);
// });
// app.get("/*", function(req,res){
//     var g = req.params.search;
//     res.status(404).send('cannot'+g);
// });
// app.listen(3000,function(){
//     console.log("Example is running on port 3000");
// });


// var express = require("express");
// var app = express();
// var Square = require("./module");

// app.get("/", function (req, res) {
//     res.send("Hello world");

// });

// app.listen(3000, function () {
//     console.log("Example is running on port 3000");
// });


// var Square = require("./module");
// var mySquareObject = new Square(5);

// function main() {
//     console.log(mySquareObject.getArea());
// }
// main();

// 23
// var fs = require("fs");
 
// function main(){
//     fs.writeFile("hello.txt","Hello world\n",function(err){
//         console.log("fs.writeFile ended");
//     });
//     console.log("fs.writeFile");
// }
// main();

// var fs = require("fs");

// function main(){
//     fs.writeFileSync("hello.txt","Hello world\n");
//     console.log("fs.writeFile");
// }
// main();

// 24

// var fs = require("fs");
// var dummyText = "Apple yep";

// function main(){
//     fs.writeFileSync("dummytext.txt",dummyText);
//     var text = fs.readFileSync("dummytext.txt").toString();
//     console.log(dummyText == text);
//     console.log(text);
//     fs.writeFileSync("undummytext.txt",
//         text.replace("Apple","Microsoft")
//     );
// }
// main();

// 26
var fs = require('fs');

var obj = 
{
    "first_name":"Vardan",
    "last_name":"Hovsepyan",
    "age":13,
    "tumo_student":true
}
var objJson = JSON.stringify(obj);
fs.writeFileSync("obj.json", objJson);


