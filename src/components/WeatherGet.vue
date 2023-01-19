<script>
import WeatherShow from './WeatherShow.vue';

const API_HOST = process.env.API_HOST;
const API_KEY = process.env.API_KEY;

const DEFAULT_WEATHER = {
  coord: { lon: 'Loading', lat: 'Loading' },
  weather: [
    { id: 'Loading', main: 'Loading', description: 'Loading', icon: 'Loading' },
  ],
  base: 'Loading',
  main: {
    temp: 'Loading',
    feels_like: 'Loading',
    temp_min: 'Loading',
    temp_max: 'Loading',
    pressure: 'Loading',
    humidity: 'Loading',
    sea_level: 'Loading',
    grnd_level: 'Loading',
  },
  visibility: 'Loading',
  wind: { speed: 'Loading', deg: 'Loading', gust: 'Loading' },
  rain: { '1h': 'Loading' },
  clouds: { all: 'Loading' },
  dt: 'Loading',
  sys: { country: 'Loading', sunrise: 'Loading', sunset: 'Loading' },
  timezone: 'Loading',
  id: 'Loading',
  name: 'Loading',
  cod: 'Loading',
};

export default {
  props: ['city'],
  components: {
    WeatherShow,
  },
  data() {
    return {
      weather: { ...DEFAULT_WEATHER },
    };
  },
  mounted: function () {
    console.log(`${API_HOST}?q=${this.city}&appid=${API_KEY}`);
    this.axios
      .get(`${API_HOST}?q=${this.city}&appid=${API_KEY}`)
      .then((response) => {
        this.weather = response.data;
      });
  },
};
</script>

<template>
  <div v-if="weather != {}">
    <WeatherShow :data="weather"></WeatherShow>
  </div>
</template>
