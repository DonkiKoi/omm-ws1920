const fs = require('fs');
const app = require('express')();
const http = require('http');
const WebSocket = require('ws');

const port = 3000;
const server = http.createServer({
  //key: fs.readFileSync('server.key'),
  //cert: fs.readFileSync('server.cert')
}, app);

const wss = new WebSocket.Server({server});
wss.on('connection', function connection(ws) {
    ws.on('message', function incoming(data) {
        wss.clients.forEach(function each(client) {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(data);
            }
        });
    });
});

app.get('/anchor', function(req, res){
  res.sendFile(__dirname + '/anchor.html');
});

app.get('/viewer', function(req, res){
  res.sendFile(__dirname + '/viewer.html');
});

server.listen(port, function(){
  console.log(`server is listening on localhost:${port}`);
});