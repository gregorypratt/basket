var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var app = express();

//
// Config
//
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

//
// Models
//
require('./server/models/Customer');

//
// Services
//
require('./server/services/customerLocationService');
require('./server/services/productCatalogueService');

//
// Routes
//
app.use('/', router);

// Routes - api
require('./server/api/customerLocation')(router);
require('./server/api/productCatalogue')(router);
require('./server/api/confirmation')(router);

// Routes - site - statics
app.use('/', express.static('./client'));

//
// Errors
//
app.use(function (req, res) {
	res.status(404).end();
});

app.use(function (err, req, res) {
	var stack = new Error(err).stack;
	console.log(stack);
	res.status(err.status || 500).end();
});

//
// Start server
//
app.set('port', process.env.PORT || 9000);

app.listen(app.get('port'), '0.0.0.0', function () {
	console.log(`Let's go`);
});

module.exports = app;