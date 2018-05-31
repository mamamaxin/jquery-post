var express = require("express");
var app = express();

app.use(express.static('public'));

app.get('/', function(req, res){
    res.send("hello ma");
});
app.get('/about', function(req, res){
    res.send("这是一个About页面");
});
app.get('/login', function(req, res){
    res.send("<h2>这是一个登入页面</h2>姓名： <input id='name'name='name'><br/><input type='submit' value='登入'>");
});
app.post('/login', function(req, res){
    res.send("这是页面");
});
var server = app.listen(8080);

console.log("服务器运行在http://localhost:8080");