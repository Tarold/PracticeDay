<script>
import axios from 'axios';

export default {
  data() {
    return {
      city: 'Запоріжжя',
      listCities: [],
      selectedCity: { presentName: '', name: '', Alldata: '' },
      selectedWarehouses: {},
      warehouses: [],
      warehousesSearch: '',
      warehousesSearchList: [],
    };
  },
  mounted: function () {
    this.getCity();
  },
  methods: {
    getCity() {
      this.selectedCity = { presentName: '', name: '', Alldata: '' };
      this.listCities = [];
      this.warehouses = [];
      this.warehousesSearch = '';
      axios
        .post(`https://api.novaposhta.ua/v2.0/json/`, {
          apiKey: '5aa46b8fde4c88031c81aebf04a0ed7d',
          modelName: 'Address',
          calledMethod: 'searchSettlements',
          methodProperties: {
            CityName: this.city,
          },
        })
        .then((data) => {
          if (data.data.success && data.data.data[0].Addresses.length !== 0) {
            this.listCities = [...data.data.data[0].Addresses];
          } else {
            this.listCities[0] = 'Немає міст';
          }
        });
    },
    selectCity(city) {
      this.selectedCity.presentName = city.Present;
      this.selectedCity.name = city.MainDescription;
      this.selectedCity.Alldata = city;

      this.city = city.Present;

      this.getWarehouses();
    },
    getWarehouses() {
      axios
        .post(`https://api.novaposhta.ua/v2.0/json/`, {
          apiKey: '5aa46b8fde4c88031c81aebf04a0ed7d',
          modelName: 'Address',
          calledMethod: 'getWarehouses',
          methodProperties: {
            CityName: this.selectedCity.name,
            Language: 'UA',
          },
        })
        .then((data) => {
          if (data.data.success && data.data.data.length > 0) {
            this.warehouses = data.data.data;
            this.searchWarehouses();
          } else {
            this.warehouses = ['Немає відділень'];
          }
        });
    },
    searchWarehouses() {
      this.selectedWarehouses = {};
      this.warehousesSearchList = this.warehouses.filter((element) =>
        element.Description.includes(this.warehousesSearch)
      );
    },
    selectWarehouse(warehouse) {
      this.warehousesSearch = warehouse.Description;
      this.selectedWarehouses = warehouse;
    },
  },
};
</script>

<template>
  <section class="search">
    <div class="head">
      <h2>Search Warehouses</h2>
      <img
        src="https://developers.novaposhta.ua/static/public/img/nav/logo.png"
        class="logo"
      />
    </div>

    <label>
      City
      <div class="inputSection">
        <input type="text" v-model="city" />
        <button @click="() => getCity()">Search</button>
      </div>
    </label>
    <ul v-if="selectedCity.presentName !== this.city">
      <span v-if="listCities.length === 0">Пошук населених пунктів </span>
      <span v-if="listCities[0] === 'Немає міст'">
        Населених пунктів з таким ім'ям немає
      </span>
      <li v-for="city in listCities" @click="() => selectCity(city)">
        {{ city.Present }}
      </li>
    </ul>
    <div v-if="selectedCity.presentName === this.city">
      <span v-if="warehouses[0] === 'Немає відділень'">Немає відділень </span>
      <label v-else>
        Warehouses
        <div class="inputSection">
          <input type="text" v-model="warehousesSearch" />
          <button @click="searchWarehouses">Search</button>
        </div>
      </label>
      <span v-if="warehouses.length === 0">Пошук відділеннь </span>
      <ul v-if="Object.keys(selectedWarehouses).length === 0">
        <li
          v-for="warehouse in warehousesSearchList"
          @click="() => selectWarehouse(warehouse)"
        >
          {{ warehouse.Description }}
        </li>
      </ul>
    </div>
    <div
      v-if="
        Object.keys(selectedWarehouses).length !== 0 &&
        Object.keys(selectedCity.Alldata).length !== 0
      "
    >
      <h3>Finally result:</h3>
      <p>{{ selectedWarehouses.Description }}</p>
      <p>{{ selectedCity.presentName }}</p>
    </div>
  </section>
</template>

<style scoped>
.search {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  margin: 40px auto;
  padding: 20px;
  box-shadow: rgba(17, 12, 46, 0.15) 0px 48px 100px 0px;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  width: 550px;
  gap: 20px;
}
.head {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.logo {
  width: 32px;
  height: 32px;
}
ul {
  padding-inline-start: 0;
}
.inputSection {
  display: flex;
}
input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px 0 0 4px;
  box-sizing: border-box;
}
button {
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 0 4px 4px 0;
  box-sizing: border-box;
}
li {
  list-style-type: none;
  margin: 5px 0;
  padding: 5px;
  border: 1px solid rgba(128, 128, 128, 0.445);
  border-radius: 0.5rem;
  width: 100%;
}
</style>
