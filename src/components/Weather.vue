<script>
import Student from './StudentsList/Student.vue';
import EditStudent from './StudentsList/EditStudent.vue';
import AddStudent from './StudentsList/AddStudent.vue';

const DEFAULT_STUDENT = { pib: '', zdav: false, group: '' };

const API_HOST = process.env.API_HOST;
const S3_API = process.env.S3_API;
console.log(API_HOST, S3_API);
export default {
  components: {
    Student,
    EditStudent,
    AddStudent,
  },
  data() {
    return {
      weather: {},
    };
  },
  mounted: function () {
    this.axios
      .get(
        'https://api.openweathermap.org/data/2.5/weather?q=Zaporizhzhya&appid=7914d5a440960cfd5df3bd0388a7ad0f'
      )
      .then((response) => {
        console.log(response.data);
        this.weather = response.data;
      });
  },
};
</script>

<template>
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
