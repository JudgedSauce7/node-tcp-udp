/**
 * Send messages using netcat
 * $ nc localhost 8080
 */

const net = require('net');

const server = net.createServer(socket => {
	socket.write('Hello from tcp !\n');
	socket.on('data', data => {
		console.log(data.toString())
	})
})

server.listen(8080);
