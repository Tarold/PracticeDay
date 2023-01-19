<template>
  <div class="personInfo">
    <h2>{{ student.name }}</h2>
    <p>Робота учня: {{ isDonePrOfStudent }}</p>
    <img :src="student.photo" @click="isOpen = !isOpen" />
    <Modal :open="isOpen" @close="isOpen = !isOpen">
      <img :src="student.photo" @click="isOpen = !isOpen" />

      <h2>{{ student.name }}</h2>
      <p>{{ student.group }}</p>
      <p>Робота учня: {{ isDonePrOfStudent }}</p>
    </Modal>
  </div>
</template>

<script>
import axios from 'axios';
import Modal from './Modal.vue';

export default {
  components: { Modal },
  props: {
    id: '',
  },
  data() {
    return {
      student: {},
      isOpen: false,
    };
  },
  mounted() {
    axios.get(`http://34.82.81.113:3000/students/${this.id}`).then((res) => {
      this.student = res.data;
    });
  },
  computed: {
    isDonePrOfStudent() {
      return this.student.isDonePr ? 'здана' : 'не здана';
    },
  },
};
</script>

<style>
img {
  width: auto;
  border: 1px solid black;
  border-radius: 0.5rem;
  cursor: pointer;
  margin-bottom: 20px;
}
.personInfo {
  display: flex;
  margin: 0 auto;
  width: 400px;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  border-radius: 0.5rem;
}
</style>
