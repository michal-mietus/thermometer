const fs = require('fs');
const socketIo = require('socket.io');
const http = require('http');
const express = require('express');
const app = express();
const port = 4000;

var readTemp = require('./get-temperature.js');

const server = http.createServer(app);
const io = socketIo(server);

app.get('/', function(req, res) {
  console.log('New connection.');

  let interval;
  io.on("connection", socket => {
    console.log("New client connected");
    if (interval) {
      clearInterval(interval);
    }

    interval = setInterval(() => readFileAndEmitTemp(socket), 10000);

    socket.on("disconnect", () => {
      console.log("Client disconnected");
    });
  }); 
  readFileAndEmitTemp(res);
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

const readFileAndEmitTemp = async socket => {
  try {
    fs.readFile('/sys/bus/w1/devices/28-000009ee08e7/w1_slave', 'utf8', (err, data) => {
      if (err) throw err;
      tempInCelsius = readTemp.findTempInFile(data);
      socket.emit("Temp", tempInCelsius);
    })
  } catch (error) {
    console.log(error);
  }
}