<template>
  <div>
    <h1>Your Cart</h1>
    <CartProductList :products="cart" />
  </div>
</template>

<script>
import CartProductList from "../components/CartProductList"
export default {
  name: 'Cart',
  components: {
    CartProductList
  },
  data() {
    return{
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    }
  },
  methods: {
  }
}
</script>
