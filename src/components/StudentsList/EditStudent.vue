<script>
export default {
  props: ['item', 'defaultItem', 'cancel', 'edit'],
};
</script>

<template>
  <td><input v-model="item.name" /></td>
  <td><input type="checkbox" v-model="item.isDonePr" /></td>
  <td>
    <select v-model="item.group">
      <option value="RPZ 19 1/9">RPZ 19 1/9</option>
      <option value="RPZ 19 2/9">RPZ 19 2/9</option>
    </select>
  </td>
  <td>
    <button @click="cancel">Cancel</button>
  </td>
  <td>
    <button
      @click="edit"
      :disabled="JSON.stringify(defaultItem) === JSON.stringify(item)"
    >
      Edit student
    </button>
  </td>
</template>

<!-- 
  Така версія не захищена від змін параметрів студента в майбутньому(менш універсальна), але не використовує інші бібліотеки
  :disabled="defaultItem.name == item.name &&
  defaultItem.isDonePr == item.isDonePr &&
  defaultItem.group == item.group" -->
