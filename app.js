//node_module에 있는 express 로딩

var express = require("express");

//express는 function임 반환값을 변수에 저장
var app = express();

app.listen(3000, function(){
    console.log("Server starting on PortNo 3000");
    
})
app.use(express.static('public'));

app.get('/', function(req,res) {
    res.sendFile(__dirname + "/index.html")
})
