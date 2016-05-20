/*
 Customer Location Service
 Data access stub for customer locations.
 */

const locations = {
	1111: 'LONDON',
	2222: 'LIVERPOOL'
};

module.exports = {
	getLocation: customerID => {
		// Would usually return a promise but this is a stub
		return locations[customerID];
	}
};