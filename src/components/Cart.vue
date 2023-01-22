<template>
  <h1>Your cart</h1>
  <div v-for="(product, index) in products" v-bind:key="index" class="cartItem">
    <img class="productImg" :src="product.tovar.src" />
    <p class="titleProduct">{{ product.tovar.item }}</p>
    <p>{{ product.tovar.price }}$</p>
    <button @click="RemoveFromCart(index)" class="removeButton">Remove</button>
  </div>
  <p>Price: {{ allCount }}$</p>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      allCount: 0,
    };
  },
  mounted() {
    this.RefreshData();
  },
  methods: {
    RemoveFromCart(index) {
      this.$store.commit('delCart', index);
      this.RefreshData();
    },
    RefreshData() {
      this.products = this.$store.getters.getCart;
      let count = 0;
      this.$store.getters.getCart.forEach(
        (element) => (count += element.tovar.price)
      );
      this.allCount = count.toFixed(2);
    },
  },
};
</script>

<style>
.cartItem {
  border: 1px solid black;
  display: flex;
  padding: 10px;
  justify-content: space-between;
  margin: 5px 0;
  align-items: center;
}
.productImg {
  height: 100px;
}
.titleProduct {
  font-weight: 700;
  padding: 10px;
  margin-right: auto;
}
.removeButton {
  margin: 5px;
}
</style>
