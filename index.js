//const express = require('express')
//const app = express()

//app.use(express.static('public'))
//app.listen(3000, () => console.log('Server running on port 3000'))

var emptygif = require('emptygif');


var express = require('express');
var app = express();
var server = require('http').createServer(app);

server.listen(3000, () => console.log('Server running on port 3000'))

var io = require('socket.io')(server);


app.get('/tpx.gif', function(req, res, next) {
  io.emit('visit', {
    ip: req.ip,
    ua: req.headers['user-agent']
  });

  emptygif.sendEmptyGif(req, res, {
    'Content-Type': 'image/gif',
    'Content-Length': emptygif.emptyGifBufferLength,
    'Cache-Control': 'public, max-age=0' // or specify expiry to make sure it will call everytime
  });
});


app.use(express.static(__dirname + '/public'));
