const express = require('express');
const socket = require('socket.io');

const app = express();
const server = app.listen(4000, () => {
  console.log('Live-Chat-App: listening to port 4000');
});

// Static files
app.use(express.static('public'));

// Socket setup
const io = socket(server);

io.on('connection', (socket) => {
  console.log("Socket connection established!")
})