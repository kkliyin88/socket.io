const express = require('express');
const path = require('path');
const app =express();//其实是一个监听函数
const server = require('http').createServer(app);
app.use(express.static(path.resolve('public'))); //使用静态文件中间件,把当前目录下面的public目录作为静态文件的根目录
let io = require('socket.io')(server);

io.on('connection',function(socket){ 
  console.log('客户端连接成功');
  socket.on('message',function(message){
    console.log('客户端发过来的消息:'+message);
//  socket.send('客户端发过来的消息0'+message) //对发送消息过来的客户端发送消息
    io.emit('message',message) //向所有连接此服务器的客户端发送广播(注意是io.emit,而不是socket.send)
  })
})

//################命名空间########################


io.of('/info').on('connection',function(socket){ 
  console.log('客户端info连接成功');
  
  let roomName
  socket.on('message',function(message){
      console.log('客户端发过来的消息:'+message);
     //向所有连接此服务器的客户端发送广播(注意是io.emit,而不是socket.send)
     //io.of('/info').emit('message',message) 
     //向命名空间内的对应roomName的客户端广播
     io.of('/info').in(roomName).emit('message',message)
  })
  socket.on('join',function(name){
    roomName = name;
    socket.join(name)
  })
  socket.on('leave',function(name){
    socket.leave(name);
     roomName = null;
  })
})

io.of('/job').on('connection',function(socket){ 
  console.log('客户端job连接成功');
  socket.on('message',function(message){
      console.log('客户端发过来的消息:'+message);
      io.of('/job').emit('message',message) //向所有连接此服务器的客户端发送广播(注意是io.emit,而不是socket.send)
  })
})

//################房间########################


server.listen(8080);

//服务器命名空间




