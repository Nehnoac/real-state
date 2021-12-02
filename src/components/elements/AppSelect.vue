<template>
  <div class="app-select">
    <label :for="id">{{ label }}</label>
    <select :id="id">
      <option value="" disabled selected>-- Seleccione --</option>
      <option v-for="(option, i) in options" :key="i" :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'AppSelect',

  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    options: {
      type: Array,
      required: true
    }
  }
};
</script>
