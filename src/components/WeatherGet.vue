<script>
import WeatherShow from './WeatherShow.vue';
const API_HOST = process.env.API_HOST;
const API_KEY = process.env.API_KEY;
export default {
  props: ['city'],
  components: {
    WeatherShow,
  },
  data() {
    return {
      weather: '',
    };
  },

  mounted: function () {
    console.log(`${API_HOST}?q=${city}&appid=${API_KEY}`);
    this.axios
      .get(`${API_HOST}?q=${city}&appid=${API_KEY}`)
      .then((response) => {
        this.weather = response.data;
      });
  },
};
</script>

<template>
  <!-- <WeatherShow v-if="weather" :data="weather"></WeatherShow>
  <span v-else>Loading</span> -->
</template>
