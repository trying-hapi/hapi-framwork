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
  .end((err, res)=>{
    expect(err).to.eql(null);
    expect(res.body.color).to.eql('green');
    expect(res.body.name).to.eql('Qo\'noS');
    expect(res.body.size).to.eql('earth-like');
    expect(res.body.moonsNumber).to.eql(0);
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
    expect(res.body.length).to.eql(0);
    done();
  });
});
});


//
//
//
describe('routes that need a planet in the db', ()=>{

  beforeEach((done)=>{
    var newPlanet = new Planet({name:'Qo\'noS', color: 'green', size:'earth-like', moonsNumber:0})
    newPlanet.save((err, data)=>{
      console.log(data);
      this.planet = data;
          done();
    });

  });
// });

afterEach((done)=>{
this.planet.remove((err)=>{
    done();
  });
});
//
after((done)=>{
  mongoose.connection.db.dropDatabase(()=>{
    done();
  });
});

it('should the Put', (done)=>{
  request('localhost:3000')
  .put('/planets' + this.planet._id)
  .send({name:'Vulcan', color: 'green', size:'earth-like', moonsNumber:0})
  .end((err, res)=>{
    // console.log(err);
    expect(err).to.eql(null);
    expect(res.body.color).to.eql('green');
    done();
  });
});



it('should DELETE', (done)=>{
  request('localhost:3000')
  .delete('/planets' + this.planet._id)
  .end((err, reply)=>{
    expect(err).to.eql(null);
    expect(reply).to.eql('OMG! We destroyed a planet!');
    done();
  });
});

});
