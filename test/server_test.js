const chai = require('chai');
const expect = chai.expect;
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const request = chai.request;
const mongoose = require('mongoose');
const port = 3000;
process.env.MONGO_URI = 'mongodb://localhost/planet_test_db';
require(__dirname + '/../server');
const Planet = require(__dirname + '/../model/model');

describe('The POST method', ()=>{
  after((done)=>{
    mongoose.connection.db.dropDatabase(()=>{
      done();
    });
  });

it('should make a solar system', (done)=>{
  request('localhost:3000')
  .post('/planets')
  .send({name:'Qo\'noS', color: 'green', size:'earth-like', moonsNumber:0})
  .end((err, reply)=>{
    expect(err).to.eql(null);
    expect(req.payload.color).to.eql('green');
    done();
  });
});
});

describe('the GET', (done)=>{
it('should get the planets', (done)=>{
  request('localhost:3000')
  .get('/planets')
  .end((err, res)=>{
    expect(err).to.eql(null);
    expect(Array.isArray()).to.eql(true);
    // expect(length).to.eql(0);
    done();
  });
});
});



// 
// handler: function(req, reply) {
//   var newPlanet = new Planet(req.payload);
//   newPlanet.save((err, newPlanet) => {
//     if (err) {
//       return reply(err);
//     }
//     reply(newPlanet).created('/planets/' + newPlanet._id);
//   });
// }

describe('routes that need a planet in the db', ()=>{
  beforeEach((done)=>{
    var newPlanet = new Planet(req.payload)
    newPlanet.save((err,data)=>{
          console.log(data);
      newPlanet = data;


          done();
    })

  });
});

afterEach((done)=>{
  newPlanet.remove((err)=>{
    done();
  });
});

after((done)=>{
  mongoose.connection.db.dropDatabase(()=>{
    done();
  });
});

it('should the Put', (done)=>{
  request('localhost:3000')
  .put('/planets' + newPlanet._id)
  .send({name:'Qo\'noS', color: 'green', size:'earth-like', moonsNumber:0})
  .end((err, res)=>{
    expect(err).to.eql(null);
    done();
  });
});






//

it('should DELETE', (done)=>{
  request('localhost:3000')
  .delete('/planets' + newPlanet._id)
  .end((err, reply)=>{
    expect(err).to.eql(null);
    expect(reply).to.eql('OMG! We destroyed a planet!');
    done();
  });
});

// });
