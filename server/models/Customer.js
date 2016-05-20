/*
	Customer Model
	Create new customers from customerID
	Location will be determined on instantiation
 */

const customerLocationService = require('../services/customerLocationService');

module.exports = function (customerID) {
	let location = customerLocationService.getLocation(customerID);

	return {
		customerID,
		location
	}
};
