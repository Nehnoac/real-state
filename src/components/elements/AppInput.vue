<template>
  <div class="app-input">
    <label :for="id">{{ label }}</label>
    <input
      :type="type"
      :id="id"
      :value="modelValue"
      @input="event => $emit('update:modelValue', event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: 'AppInput',

  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    modelValue: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      input: ''
    };
  }
};
</script>
