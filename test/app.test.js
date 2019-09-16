/* eslint-disable no-undef */
import chai from 'chai';
import chaiHttp from 'chai-http';
import app from '../routes/app';

// configure chai
chai.use(chaiHttp);
chai.should();

describe('People', () => {
  describe('GET /', () => {
    // Test to get all students
    it('should get all people records', (done) => {
      chai.request(app)
        .get('/people')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
    // test for single person
    it('should get a single person', (done) => {
      const id = 1;
      chai.request(app)
        .get(`/people/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    // test for single person error
    it('should throw error for invalid id', (done) => {
      const id = 5;
      chai.request(app)
        .get(`/people/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});

describe('People Post', () => {
  describe('POST /', () => {
    it('should post a person', (done) => {
      chai.request(app)
        .post('/people')
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });
  });
});

describe('Edit person', () => {
  describe('PUT /', () => {
    it('should edit the person', (done) => {
      const id = 1;
      chai.request(app)
        .put(`/people/${id}`)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.should.be.a('object');
          done();
        });
    });

    // throw error no id
    it('should throw error id not valid', (done) => {
      const id = 5;
      chai.request(app)
        .put(`/people/${id}`)
        .end((err, res) => {
          res.should.have.status(404);
          done();
        });
    });
  });
});
