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
    done();
  });
});




});
