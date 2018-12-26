const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;
var readTemp = require('./get-temperature.js');

app.get('/', function(req, res) {
  console.log('New connection.');
  fs.readFile('/sys/bus/w1/devices/28-000009ee08e7/w1_slave', 'utf8', (err, data) => {
    if (err) throw err;
    tempInCelsius = readTemp.findTempInFile(data);
    res.send(String(tempInCelsius));
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

