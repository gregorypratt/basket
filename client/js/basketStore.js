function BasketStore() {
	riot.observable(this);

	this.products = [];

	var _this = this;

	this.on('product:added', function (product) {
		_this.products.push(product);
		_this.trigger('basket:changed', _this.products);
	});

	this.on('product:removed', function (product) {
		var index = _this.products.indexOf(product);
		_this.products.splice(index, 1);
		_this.trigger('basket:changed', _this.products);
	});
}
