<script>
import axios from 'axios';
import Student from './StudentsList/Student.vue';
import EditStudent from './StudentsList/EditStudent.vue';
import AddStudent from './StudentsList/AddStudent.vue';

const DEFAULT_STUDENT = { pib: '', zdav: false, group: '' };

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
    axios.get('http://34.82.81.113:3000/students').then((response) => {
      console.log(response.data);
      this.students = response.data;
    });
  },
  methods: {
    deleteStudent(Id) {
      axios.delete(`http://34.82.81.113:3000/students/${Id}`).then(() => {
        this.students = this.students.filter((st) => st._id != Id);
      });
    },
    addStudent() {
      axios
        .post('http://34.82.81.113:3000/students', {
          ...this.addingStudent,
        })
        .then((response) => {
          this.students.push(response.data);
          this.addingStudent = { ...DEFAULT_STUDENT };
        });
    },
    startEdit(Id) {
      axios.get(`http://34.82.81.113:3000/students/${Id}`).then((response) => {
        this.edittingStudent = response.data;
        this.editId = Id;
      });
    },
    editStudent(key) {
      axios
        .put(`http://34.82.81.113:3000/students/${this.editId}`, {
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
  },
};
</script>

<template>
  <div>
    <label>
      Пошук:
      <input
        type="text"
        name="search"
        v-model="search"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    /></label>
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <tbody>
        <tr
          v-for="(item, key) in students"
          v-bind:key="item._id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
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
        <AddStudent :student="addingStudent" :add="() => addStudent()">
        </AddStudent>
      </tbody>
    </table>
  </div>
</template>
