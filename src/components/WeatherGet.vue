<script>
import WeatherShow from './WeatherShow.vue';

const API_HOST = process.env.API_HOST;
const API_KEY = process.env.API_KEY;

const DEFAULT_WEATHER = {
  coord: { lon: 35.1833, lat: 47.8167 },
  weather: [{ id: 500, main: 'Rain', description: 'light rain', icon: '10d' }],
  base: 'stations',
  main: {
    temp: 279.96,
    feels_like: 275.73,
    temp_min: 279.96,
    temp_max: 279.96,
    pressure: 1014,
    humidity: 90,
    sea_level: 1014,
    grnd_level: 1008,
  },
  visibility: 10000,
  wind: { speed: 7.82, deg: 144, gust: 17.93 },
  rain: { '1h': 0.21 },
  clouds: { all: 100 },
  dt: 1674043380,
  sys: { country: 'UA', sunrise: 1674019301, sunset: 1674051417 },
  timezone: 7200,
  id: 687700,
  name: 'Zaporizhia',
  cod: 200,
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
