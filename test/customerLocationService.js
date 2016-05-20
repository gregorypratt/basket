var app = require('../app');
var request = require('supertest');
require('chai').should();

describe('Customer Location Service', function () {

	it('returns location based on customerID cookie', function (done) {
		request(app)
			.get('/customer-location')
			.set('Cookie', 'customerID=1111')
			.expect(200)
			.end(function (err, res) {
				res.body.should.have.property('locationID');
				res.body.locationID.should.equal('LONDON');
				done();
			});
	});

	it('handles requests with incorrect customerID cookie', function (done) {
		request(app)
			.get('/customer-location')
			.set('Cookie', 'customerID=zzzz')
			.expect(400)
			.end(function (err, res) {
				res.body.should.have.property('error');
				res.body.error.should.equal('Incorrect customerID');
				done();
			});
	});

	it('handles requests with no customerID cookie', function (done) {
		request(app)
			.get('/customer-location')
			.expect(400)
			.end(function (err, res) {
				res.body.should.have.property('error');
				res.body.error.should.equal('No customerID');
				done();
			});
	});
});