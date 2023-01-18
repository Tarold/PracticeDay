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
      cities: [],
    };
  },
  mounted: function () {
    if (localStorage.getItem('cities'))
      this.cities = JSON.parse(localStorage.getItem('cities'));
    this.axios
      .get(`${API_HOST}?q=Zaporizhzhya&appid=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        this.weather = response.data;
      });
  },
  methods: {
    AddCity() {
      //TODO this.addCity is ''
      //localStorage.clear();
      this.cities.push(this.addCity);
      localStorage.setItem('cities', JSON.stringify(this.cities));
      this.addCity = '';
    },
  },
};
</script>

<template>
  <div>
    <div>
      <input type="text" :value="addCity" />
      <button @click="AddCity">Add</button>
    </div>
    <div>
      <select name="select">
        <option v-for="city in cities" :value="city">{{ city }}</option>
      </select>
      <button @click="">Show</button>
    </div>
  </div>
  <WeatherShow :data="weather"></WeatherShow>
  <!-- <div>
    <label> Пошук: <input type="text" name="search" v-model="search" /></label>
    <table class="table table-dark">
      <tr v-for="(item, key) in students" v-bind:key="item._id">
        <Student
          v-if="item._id !== editId"
          :item="item"
          :del="() => deleteStudent(item._id)"
          :edit="() => startEdit(item._id)"
          :search="search != '' ? item.name.includes(search) : ''"
        >
        </Student>
        <EditStudent
          v-else
          :item="edittingStudent"
          :defaultItem="item"
          :cancel="() => cancelEdit()"
          :edit="() => editStudent(key)"
        ></EditStudent>
      </tr>
      <AddStudent
        :student="addingStudent"
        :add="() => addStudent()"
      ></AddStudent>
    </table>
  </div> -->
</template>

<style scoped></style>
