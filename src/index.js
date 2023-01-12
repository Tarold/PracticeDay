import { createApp } from 'vue';
import axios from 'axios';

createApp({
  data() {
    return {
      course: {
        USD: {
          rateBuy: 5,
          rateSell: 10,
        },
        EUR: {
          rateBuy: 5,
          rateSell: 10,
        },
      },
      value: 0,
      amountToUah: 0,
      toUah: 0,
      amountFromUah: 0,
      fromUah: 0,
      from: 'EUR',
      to: 'USD',
    };
  },
  mounted: function () {
    axios
      .get('https://api.monobank.ua/bank/currency')
      .then((response) => {
        this.course = {
          USD: {
            rateBuy: response.data[0].rateBuy,
            rateSell: response.data[0].rateSell,
          },
          EUR: {
            rateBuy: response.data[1].rateBuy,
            rateSell: response.data[1].rateSell,
          },
        };
      })
      .catch((err) => console.log('err', err));
  },
  methods: {
    countTo() {
      const { EUR, USD } = this.course;
      const { amountToUah, from } = this;
      this.toUah =
        from === 'EUR'
          ? EUR.rateSell * amountToUah
          : USD.rateSell * amountToUah;
    },
    countFrom() {
      const { EUR, USD } = this.course;
      const { amountFromUah, to } = this;
      this.fromUah =
        to === 'EUR'
          ? amountFromUah / EUR.rateBuy
          : amountFromUah / USD.rateBuy;
    },
  },
}).mount('#app');
