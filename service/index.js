const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
	cors: {
		origin: "*",
		methods: ["GET", "POST"]
	}
});

app.get('/', (req, res) => {
	res.send("<h1>SSXH SERVICE</h1>")
});

io.on('connection', (socket) => {
	console.log('a user connected');
	socket.on("ping", () => {
		socket.emit("pong");
	})
});

server.listen(3000, () => {
	console.log('listening on *:3000');
});