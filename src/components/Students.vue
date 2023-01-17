<script>
import axios from 'axios';
import Student from './Student.vue';
import EditStudent from './EditStudent.vue';
import AddStudent from './AddStudent.vue';

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
    <input type="text" name="search" v-model="search" /><br />
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
