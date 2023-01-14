<script>
export default {
  props: ['student', 'add'],
};
</script>

<template>
  <tr>
    <td>
      <input v-model="student.name" />
    </td>
    <td>
      <input type="checkbox" v-model="student.isDonePr" />
    </td>
    <td>
      <select v-model="student.group">
        <option value="RPZ 19 1/9">RPZ 19 1/9</option>
        <option value="RPZ 19 2/9">RPZ 19 2/9</option>
      </select>
    </td>
    <td></td>
    <td><button @click="add">Add student</button></td>
  </tr>
</template>
