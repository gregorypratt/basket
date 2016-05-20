<product-list>

	<div class="c-card c-card--higher">
		<div class="c-card__content c-card__content--divider c-heading">{ opts.category }</div>
		<label class="c-card__item c-choice js-product"
					 each="{ product in opts.products }"
					 if="{ product.category == parent.opts.category }">
			<input type="checkbox" onclick="{ selectProduct }" checked="{ product.selected }"> { product.name }
		</label>
	</div>

	<script>
		this.selectProduct = e => {
			e.item.product.selected = !e.item.product.selected;
			if (e.item.product.selected) {
				RiotControl.trigger('product:added', e.item.product);
			} else {
				RiotControl.trigger('product:removed', e.item.product);
			}
		}
	</script>

</product-list>
