import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

createApp({
  data() {
    return {
      students: [],
      newmark: '',
      newgroup: '',
      newisDonePr: '',
      newname: '',
      search: '',
      piece: '',
      student: { name: '', isDonePr: false, group: '' },
    };
  },
  mounted: function () {
    axios.get('http://34.82.81.113:3000/students').then((response) => {
      console.log('response.data', response.data);
      this.students = response.data;
    });
  },
  methods: {
    deleteStudent(studId) {
      this.students = this.students.filter((elem) => {
        return elem._id != studId;
      });
    },
    addStudent() {
      this.student._id = this.students.length + 1;
      this.students.push({ ...this.student });
    },
  },
}).mount('#app');
