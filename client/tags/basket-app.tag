<basket-app>

	<h2 class="c-heading c-heading--small">Catalogue</h2>

	<div class="o-grid o-grid--small-full o-grid--medium-full">
		<div class="o-grid__cell u-window-box--medium">
			<product-list category="Sports" products="{ data.products }"></product-list>
		</div>

		<div class="o-grid__cell u-window-box--medium">
			<product-list category="News" products="{ data.products }"></product-list>
		</div>

		<div class="o-grid__cell u-window-box--medium">
			<customer-basket></customer-basket>
		</div>
	</div>

	<script>
		let _this = this;

		function getLocation() {
			let xhr = new XMLHttpRequest();
			xhr.addEventListener('load', locationLoaded);
			xhr.open('GET', '/customer-location');
			xhr.send();
		}

		function locationLoaded() {
			const data = JSON.parse(this.responseText);
			getProducts(data.locationID);
		}

		function getProducts(locationID) {
			let xhr = new XMLHttpRequest();
			xhr.addEventListener('load', productsLoaded);
			xhr.open('GET', '/product-catalogue/' + locationID);
			xhr.send();
		}

		function productsLoaded() {
			_this.data = JSON.parse(this.responseText);
			_this.update();
		}

		this.on('mount', getLocation);
	</script>

</basket-app>
