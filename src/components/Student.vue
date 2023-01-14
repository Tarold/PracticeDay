<script>
export default {
  props: ['item', 'del', 'edit', 'search'],
};
</script>

<template>
  <td :style="search ? 'color: red;' : ''">
    {{ item.name }}
  </td>
  <td>
    <input type="checkbox" v-model="item.isDonePr" onclick="return false;" />
  </td>
  <td>{{ item.group }}</td>
  <td>
    <a href="#" @click="del">
      <font-awesome-icon icon="trash" />
    </a>
  </td>
  <td>
    <a href="#" @click="edit"><font-awesome-icon icon="pen" /></a>
  </td>
</template>
