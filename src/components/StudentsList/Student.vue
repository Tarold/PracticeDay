<script>
export default {
  props: ['item', 'del', 'edit', 'search'],
};
</script>

<template>
  <td :style="search ? 'color: red;' : ''" class="px-6 py-4">
    <router-link
      v-bind:to="'/student-info/' + item._id"
      :style="search ? 'color: red;' : ''"
    >
      {{ item.name }}
    </router-link>
  </td>
  <td class="px-6 py-4">
    <input type="checkbox" v-model="item.isDonePr" onclick="return false;" />
  </td>
  <td class="px-6 py-4">{{ item.group }}</td>
  <td class="px-6 py-4">
    <a href="#" @click="del"> Delete </a>
  </td>
  <td class="px-6 py-4">
    <a href="#" @click="edit">Edit</a>
  </td>
</template>
