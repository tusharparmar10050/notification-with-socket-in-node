var express = require("express");
var app = express();

var http = require("http").createServer(app);
var io = require("socket.io")(http);

http.listen(3000, function () {
    console.log("Server connected");

    io.on("connection", function (socket) {
        console.log("User " + socket.id);

        socket.on("messageSent", function (message) {
            console.log(message)
            socket.broadcast.emit("messageSent", message);
        });
    });
});
