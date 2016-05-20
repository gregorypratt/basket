<customer-basket>

	<div class="c-card c-card--higher">
		<div class="c-card__content c-card__content--divider c-heading">Basket</div>
		<div class="c-card__item" each="{ product in selectedProducts }">
			{ product.name }
		</div>
	</div>
	<div class="u-letter-box--large">
		<button class="c-button c-button--ghost-primary c-button--block" onclick="{ checkout }">
			Checkout
		</button>
	</div>

	<script>
		RiotControl.on('basket:changed', products => {
			this.selectedProducts = products;
			this.update();
		});

		this.checkout = function () {
			let xhr = new XMLHttpRequest();
			xhr.open('POST', '/confirmation');
			xhr.setRequestHeader('Content-Type', 'application/json;');
			xhr.send(JSON.stringify({ products: this.selectedProducts })); // customerID sent as cookie
		};
	</script>
</customer-basket>