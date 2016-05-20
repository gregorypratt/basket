/*
 Product Catalogue Service
 Data access stub for products.
 */

const products = {
	LONDON: [{
		name: 'Arsenal TV',
		category: 'Sports'
	},{
		name: 'Chelsea TV',
		category: 'Sports'
	}],
	LIVERPOOL: [{
		name: 'Liverpool TV',
		category: 'Sports'
	}]
};

const defaultProducts = [{
	name: 'Sky News',
	category: 'News'
},{
	name: 'Sky Sports News',
	category: 'News'
}];

module.exports = {
	getProducts: locationID => {
		if (!locationID || !products[locationID]) {
			return defaultProducts;
		}
		return products[locationID].concat(defaultProducts);
	}
};