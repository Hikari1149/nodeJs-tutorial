let express = require("express");
let socket = require("socket.io");

let app = express();
let server = app.listen(3005,()=>{
    console.log("server start at port 3005")
})

//serve static file
app.use(express.static('public'))


//socket setup

let io = socket(server)
io.on('connection',socket=>{
    console.log("make socket connection",socket.id)
    socket.on('chat',function(data){ //handling data sent by front end
        io.sockets.emit('chat',data);
    })
    socket.on('typing',function(data){//handling data sent by front end
        socket.broadcast.emit('typing',data)
    })

})



