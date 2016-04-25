const Planet = require(__dirname + '/../model/model.js');

module.exports = [
{
  method: 'GET',
  path: '/planets',
  handler: function(req, reply) {
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
},

{
  method: 'PUT',
  path: '/planets/{name}',
  handler: function(req, reply) {
    Planet.findOne({ 'name': req.params.name }, (err, planet) => {
      if (err) {
        return reply(err);
      }
      planet.color = req.payload.color;
      planet.size = req.payload.size;
      planet.moonsNumber = req.payload.moonsNumber;
      planet.save((err, planet) => {
        if (err) {
          return reply(err);
        }
        // return reply(planet);
              return reply({message: 'WOW! SUCH PLANET!'});
      });
    });
  }
},

{
  method: 'DELETE',
  path: '/planets/{name}',
  handler: function(req, reply) {
    Planet.findOne({ 'name': req.params.name }, (err, planet) => {
      if (err) {
      return reply(err);
    }
      if (planet) {
        planet.remove();
        return reply({ message: 'OMG! We destroyed a planet!' });
      }
    });
  }
}
];
