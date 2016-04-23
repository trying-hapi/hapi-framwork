const Hapi = require('hapi');
const mongoose = require('mongoose');
const router = require(__dirname + '/routes/router');

mongoose.connect('mongodb://localhost/planet_db');

//Create a server with a host and port
const server = module.exports = new Hapi.Server();
server.connection( {
  port: 3000
});

//Start server
server.start((err) => {
  if (err) {
    throw err;
  }
  console.log('Server running at:', server.info.uri);
});
