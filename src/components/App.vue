<template>
  <div :class="style">
    <h1>Students</h1>
    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<style>
h1 {
  text-align: center;
  margin-bottom: 20px;
}
.lightTheme,
.darkTheme {
  height: 100vh;
}
.lightTheme {
  background-color: rgb(141, 255, 141);
}
.darkTheme {
  background-color: black;
  color: white;
}
</style>

<script>
export default {
  computed: {
    style() {
      console.log(this.$store);
      return this.$store.getters.getIsDark ? 'darkTheme' : 'lightTheme';
    },
  },
};
</script>
