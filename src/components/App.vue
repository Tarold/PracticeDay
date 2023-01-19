<template>
  <div class="main">
    <h1>Weather</h1>
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
.main {
  background-color: violet;
  background-image: url('https://wallpapercave.com/wp/wp8219187.jpg');

  height: 100vh;
  color: white;
}
</style>
