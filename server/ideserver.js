var io = require('socket.io').listen(7069);

var currentCode = "";
var currentPos;

io.sockets.on('connection', function (socket) {
  socket.emit('server', {code: currentCode});
  socket.on('client', function (data) {
    //console.log(data);
    currentCode = data.code;
    currentPos = data.pos;
    socket.broadcast.emit('server', {code: currentCode, pos: currentPos});
  });
});