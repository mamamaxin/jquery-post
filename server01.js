var http = requier("http");

var hostName = '127.0.0.1';

var port = 8080;

var server = http.createServer(function(eeq,res){
    res.setHeader('Content-Type','text/plain');
    res.end("Hello ma");
});
server.listen(port, hostName, function(){
    console.log('服务器运行在http://${hostName}:${port}');
});