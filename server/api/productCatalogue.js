/*
 Product Catalogue API Routes
 Public facing URL handlers
 */

const catalogueService = require('../services/productCatalogueService');

module.exports = router => {

	function getProducts(req, res) {
		const products = catalogueService.getProducts(req.params.locationID);
		res.status(200).send({ products });
	}

	router.get('/product-catalogue/:locationID', getProducts);
	router.get('/product-catalogue', getProducts);
};
