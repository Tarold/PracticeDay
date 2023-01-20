<script>
import axios from 'axios';
import Student from './StudentsList/Student.vue';
import EditStudent from './StudentsList/EditStudent.vue';
import AddStudent from './StudentsList/AddStudent.vue';

const DEFAULT_STUDENT = { pib: '', zdav: false, group: '' };
const API_HOST = process.env.API_HOST;

export default {
  components: {
    Student,
    EditStudent,
    AddStudent,
  },
  data() {
    return {
      students: [],
      newmark: '',
      newgroup: '',
      newisDonePr: '',
      newname: '',
      search: '',
      editId: '',
      edittingStudent: {},
      addingStudent: { ...DEFAULT_STUDENT },
    };
  },
  mounted: function () {
    axios.get(API_HOST + '/students').then((response) => {
      console.log(response.data);
      this.students = response.data;
      this.$store.commit('setCount', this.students.length);
    });
  },
  computed: {
    studentsCount() {
      return this.$store.getters.getCount;
    },
  },
  methods: {
    deleteStudent(Id) {
      axios.delete(API_HOST + `/students/${Id}`).then(() => {
        this.students = this.students.filter((st) => st._id != Id);
      });
    },
    addStudent() {
      axios
        .post(API_HOST + '/students', {
          ...this.addingStudent,
        })
        .then((response) => {
          this.students.push(response.data);
          this.addingStudent = { ...DEFAULT_STUDENT };
        });
    },
    startEdit(Id) {
      axios.get(API_HOST + `/students/${Id}`).then((response) => {
        this.edittingStudent = response.data;
        this.editId = Id;
      });
    },
    editStudent(key) {
      axios
        .put(API_HOST + `/students/${this.editId}`, {
          ...this.edittingStudent,
        })
        .then((response) => {
          this.students[key] = response.data;
        })
        .finally(() => this.cancelEdit());
    },
    cancelEdit() {
      this.editId = '';
      this.edittingStudent = {};
    },
    toggleLightMode() {
      this.$store.commit('toggleIsDark');
    },
  },
};
</script>

<template>
  <div>
    <h2>Students count: {{ studentsCount }}</h2>
    <label> Пошук: <input type="text" name="search" v-model="search" /></label>
    <button @click="toggleLightMode">Toggle Light</button>
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
  </div>
</template>

<style scoped></style>
