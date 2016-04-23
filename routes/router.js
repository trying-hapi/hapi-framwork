const Planet = require(__dirname + '/../model/model.js');

module.exports = [
{
  method: 'GET',
  path: '/planets',
  handler: function(request, reply) {

    Planet.find({}, (err, docs) => {

      if (err) {
        return reply(err);
      }
      return reply(docs);
    });
  }
},

{
  method: 'POST',
  path: '/planets',
  handler: function(req, reply) {
    var newPlanet = new Planet(req.payload);
    newPlanet.save((err, newPlanet) => {
      if (err) {
        return reply(err);
      }
      reply(newPlanet).created('/planets/' + newPlanet._id);
    });
  }
}
];
