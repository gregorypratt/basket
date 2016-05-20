/*
 Confirmation stub
 */

module.exports = router => {

	router.post('/confirmation', (req, res) => {
		res.status(200).send({
			products: req.body.products,
			customerID: req.cookies.customerID
		});
	});
};