<script>
export default {
  props: ['item', 'defaultItem', 'cancel', 'edit'],
};
</script>

<template>
  <td>
    <input
      v-model="item.name"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    />
  </td>
  <td>
    <input
      type="checkbox"
      v-model="item.isDonePr"
      class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
    />
  </td>
  <td>
    <select
      v-model="item.group"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    >
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
