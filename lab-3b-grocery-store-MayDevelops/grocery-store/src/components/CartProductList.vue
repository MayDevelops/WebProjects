<template>
  <div class="wrapper">
    <div class="products">
      <div class="product" v-for="product in products" :key="product.id">
        <div class="info">
          <div class ="quantity">{{product.quantity}}</div>

          <h1>{{ product.name }}</h1>
          <p>{{ product.country }}</p>
        </div>
        <div class="image">
          <img :src="'/images/products/'+product.image">
        </div>
        <div class="price">
          <h2>{{ product.price }}</h2>
          <button class="auto" @click="addProductToCart(product)">+</button>
          <button class="auto" @click="SubProductFromCart(product)">-</button>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {data} from "../main";

export default {
  name: 'CartProductList',
  props: {
    products: Array
  },
  data() {
    return {
      cart: []
    }
  },
  methods: {
    addProductToCart(product) {
      for(let i = 0; i < data.products.length; i++) {
        if(product === data.products[i]) {
          data.products[i].quantity++;
        }
      }
    },
    SubProductFromCart(product) {
      for(let i = 0; i < data.products.length; i++) {
        if(product === data.products[i] && data.products[i].quantity >= 1) {
          data.products[i].quantity--;
        }
      }
    }
  },
  created() {
    let items = data.products;

    for(let i = 0; i < items.length; i++) {
      if(items[i].quantity > 0) {
        data.cart.push(items[i]);
      }
    }

  },
  beforeDestroy() {
    data.cart = [];
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.product img {
  border: 2px solid #333;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.price {
  display: flex;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}

.quantity {
  position: absolute;
  z-index: 100;
  margin-left: 140px;
}
</style>
