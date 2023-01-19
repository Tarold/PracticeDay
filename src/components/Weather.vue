<script>
import WeatherShow from './WeatherShow.vue';

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

const API_HOST = process.env.API_HOST;
const API_KEY = process.env.API_KEY;

export default {
  components: {
    WeatherShow,
  },
  data() {
    return {
      weather: { ...DEFAULT_WEATHER },
      addCity: '',
      selectedCity: '',
      cities: [],
      lat: '44.34',
      lon: '10.99',
    };
  },
  mounted: function () {
    if (localStorage.getItem('cities'))
      this.cities = JSON.parse(localStorage.getItem('cities'));
    this.GetGeolocation();
  },
  methods: {
    AddCity() {
      this.cities.push(this.addCity);
      localStorage.setItem('cities', JSON.stringify(this.cities));
      this.addCity = '';
    },
    GetGeolocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((data) => {
          this.lat = data.coords.latitude;
          this.lon = data.coords.longitude;
          this.FetchWeather();
        });
      } else {
        alert('Geolocation is not supported by this browser.');
      }
    },
    FetchWeather() {
      this.axios
        .get(`${API_HOST}?lat=${this.lat}&lon=${this.lon}&appid=${API_KEY}`)
        .then((response) => {
          console.log(response.data);
          this.weather = response.data;
        });
    },
  },
};
</script>

<template>
  <section class="inputSections">
    <div class="inputSection">
      <h2 class="inputTitle">ДОДАВАННЯ МІСТА</h2>
      <span class="inputCaption">ВИБЕРІТЬ НАЗВУ МІСТА:</span>
      <div class="inputText">
        <input class="input" type="text" v-model="addCity" />
        <button class="inputButton" @click="AddCity">Add</button>
      </div>
    </div>
    <div class="inputSection">
      <h2 class="inputTitle">ВИБІР МІСТА</h2>
      <span class="inputCaption">ОБЕРІТЬ МІСТО:</span>
      <div class="inputText">
        <select class="input" name="select" v-model="selectedCity">
          <option v-for="city in cities">{{ city }}</option>
        </select>
        <router-link
          class="inputButton"
          v-bind:to="'/weather-show/' + selectedCity"
        >
          Show
        </router-link>
      </div>
    </div>
  </section>
  <WeatherShow :data="weather"></WeatherShow>
</template>

<style scoped>
.inputSections {
  display: flex;
  gap: 10px;
  justify-content: space-around;
  padding: 10px;
}
.inputSection {
  width: 250px;
  padding: 10px;
  border-radius: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  background-color: rgba(0, 0, 0, 0.3);
}
.inputTitle {
  font-size: 24px;
  position: relative;
}
.inputTitle::after {
  position: absolute;
  bottom: -4px;
  left: 8px;
  content: '';
  width: 50%;
  height: 2px;
  background-color: violet;
}
.inputCaption {
  padding-left: 10px;
}
.inputText {
  display: flex;
}
.input {
  width: 100%;
}
.inputButton {
  background-color: #0095ff;
  height: 100%;
  border: 0;
  box-shadow: rgba(255, 255, 255, 0.4) 0 1px 0 0 inset;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  line-height: 1.15385;
  margin: 0;
  outline: none;
  padding: 8px 0.8em;
}
</style>
