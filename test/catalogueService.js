var app = require('../app');
var request = require('supertest');
require('chai').should();

describe('Catalogue Service', function () {

	it('always returns default products', function (done) {
		request(app)
			.get('/product-catalogue')
			.expect(200)
			.end(function (err, res) {
				res.body.should.have.property('products');
				res.body.products.length.should.equal(2);
				done();
			});
	});

	it('returns products based on London locationID', function (done) {
		request(app)
			.get('/product-catalogue/LONDON')
			.expect(200)
			.end(function (err, res) {
				res.body.should.have.property('products');
				res.body.products.length.should.equal(4);
				done();
			});
	});

	it('returns products based on Liverpool locationID', function (done) {
		request(app)
			.get('/product-catalogue/LIVERPOOL')
			.expect(200)
			.end(function (err, res) {
				res.body.should.have.property('products');
				res.body.products.length.should.equal(3);
				done();
			});
	});
});