/**
 * Send messages using netcat
 * $ nc -u localhost 8081
 */

const dgram = require('dgram');
const socket = dgram.createSocket('udp4');

socket.on('message', (msg, rinfo) => {
	console.log(`Received : ${msg} from ${rinfo.address}:${rinfo.port}`);
});

socket.bind(8081);
