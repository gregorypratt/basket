var app = require('../app');
var request = require('supertest');
require('chai').should();

describe('Confirmation Service', function () {

	it('accepts a list of products and a customerID cookie', function (done) {
		request(app)
			.post('/confirmation')
			.set('Cookie', 'customerID=1111')
			.set('Content-Type', 'application/json')
			.send({ products: [{ }, { }] })
			.expect(200)
			.end(function (err, res) {
				res.body.should.have.property('products');
				res.body.products.length.should.equal(2);
				res.body.should.have.property('customerID');
				res.body.customerID.should.equal('1111');
				done();
			});
	});
});