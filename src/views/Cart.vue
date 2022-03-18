<template>
  <div class="shopping cart">
  <h2>Your Cart</h2>
  <ProductList :products="cart" />

</div>

</template>


<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'vue/multi-word-component-names/Cart',
  components: {
    ProductList
  },
  computed: {
    cart() {
      return this.$root.$data.getCart();

    }
}
}
</script>
