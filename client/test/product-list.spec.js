describe('product-list', function () {
	var tag;
	
	// Probably should mock these but there's no time!
	var basket = new BasketStore();
	RiotControl.addStore(basket);

	beforeEach(function () {
		$('body').append('<product-list></product-list>');

		var category = 'Comedy';
		var products = [{
			name: 'Funny TV',
			category: 'Comedy'
		}, {
			name: 'SitComs',
			category: 'Comedy'
		}, {
			name: 'Documentaries',
			category: 'Serious'
		}];

		tag = riot.mount('product-list', {
			category: category,
			products: products
		})[0];
	});

	afterEach(function () {
		basket.products = [];
		tag.unmount();
	});

	it('is mounted', function () {
		tag.isMounted.should.be.true;
	});
	
	it('should display 2 products based on category', function () {
		should.exist($('product-list .js-product'));
		$('product-list .js-product').length.should.equal(2);
	});

	it('adds products to the basket store', function () {
		basket.products.length.should.equal(0);
		$('product-list .js-product input')[0].click();
		basket.products.length.should.equal(1);
		basket.products[0].name.should.equal('Funny TV');
	});

	it('removes products from the basket store', function () {
		// Add
		basket.products.length.should.equal(0);
		$('product-list .js-product input')[0].click();
		basket.products.length.should.equal(1);
		basket.products[0].name.should.equal('Funny TV');
		// Now remove it
		$('product-list .js-product input')[0].click();
		basket.products.length.should.equal(0);
	});
});
