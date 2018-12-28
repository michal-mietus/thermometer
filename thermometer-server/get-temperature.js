const fs = require('fs');


getTemp = function(tempFileData) {
  const tempPattern = /t=\d\d\d\d\d/;
  const onlyDigitsPattern = /\d+/;
  if (tempPattern.exec(tempFileData)) {
    tempChars = tempPattern.exec(tempFileData)[0];
    tempDigitsOnly = onlyDigitsPattern.exec(tempChars);
    tempInCelsius = tempDigitsOnly[0] / 1000;

    return tempInCelsius;
  }
}

exports.getTemp = getTemp;