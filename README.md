# Thermometer application

This application works on raspberry pi with DS18B20+ temperature sensor.
If someone connect to server with react client, socket is opening and every
3 seconds loads current sensor temperature.

### External packages

##### In server side application:
- Node js
- Express
- Socket.io

##### In client side application:
- React

### Running

Server side application after install all necessary elements 
you can run by typing in `thermometer-server` folder
```
node index.js
```

Client application you run typing
```
npm start
```
in `thermometer-socket-client` folder
