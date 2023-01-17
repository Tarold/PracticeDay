<template>
  {{ student.name }}{{ isDonePrOfStudent
  }}<img :src="student.photo" @click="isOpen = !isOpen" />
  <Modal>
    <span>Text</span>
    <img :src="student.photo" @click="isOpen = !isOpen" />
  </Modal>
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
  height: 100px;
}
</style>
