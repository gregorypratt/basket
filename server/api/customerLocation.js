/*
 Customer Location API Routes
 Public facing URL handlers
 */

const Customer = require('../models/Customer');

module.exports = router => {

	function getLocation(req, res) {
		const customer = new Customer(req.cookies.customerID);
		if (!customer.location) {
			return res.status(400).send({ error: 'Incorrect customerID' });
		}
		res.status(200).send({ locationID: customer.location });
	}

	router.route('/customer-location')
		.all((req, res, next) => {
			if (!req.cookies || !req.cookies.customerID) {
				return res.status(400).send({ error: 'No customerID' })
			}
			next();
		})
		.get(getLocation);
};