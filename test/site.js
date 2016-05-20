var app = require('../app');
var request = require('supertest');
require('chai').should();

describe('Site', function () {
	
	it('serves the index page', function (done) {
		request(app)
			.get('/')
			.expect(200)
			.end(done);
	});

	it('responds to unknown URLs with 404', function (done) {
		request(app)
			.get('/404')
			.set('Content-Type', 'application/json')
			.expect(404)
			.end(done);
	});
});