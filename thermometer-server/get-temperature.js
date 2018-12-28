const fs = require('fs');
const tempPattern = /t=\d\d\d\d\d/


getTempFile = function() {
  fs.readFile('/sys/bus/w1/devices/28-000009ee08e7/w1_slave', encoding='UTF-8', (err, data) => {
    if (err) throw err;
    tempInCelsius = findTempInFile(data);
  })
}

findTempInFile = function(tempFileData) {
  const tempPattern = /t=\d\d\d\d\d/;
  const onlyDigitsPattern = /\d+/;
  if (tempPattern.exec(tempFileData)) {
    tempChars = tempPattern.exec(tempFileData)[0];
    tempDigitsOnly = onlyDigitsPattern.exec(tempChars);
    tempInCelsius = tempDigitsOnly[0] / 1000;

    return tempInCelsius;
  }
}

exports.findTempInFile = findTempInFile;

