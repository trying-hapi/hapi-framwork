// const Hapi = require('hapi');
const server = require(__dirname + '/../server');
const Planet = require(__dirname + '/../model/model.js');

server.route({
  method: 'GET',
  path: '/planets',
  handler: function(request, reply) {

    Planet.find((err, docs) => {

       if (err) {
         return reply(err);
       }
       reply(docs);
    });
  }
});

server.route({
  method: 'POST',
  path: '/planets',
  handler: function(request, reply) {

    Planet.save(request.payload, (err, result) => {

      if (err) {
        return reply(err);
      }
      reply(request.payload);
    });
  }
});
