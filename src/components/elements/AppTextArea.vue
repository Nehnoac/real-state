<template>
  <div class="app-textarea">
    <label :for="id">{{ label }}</label>
    <textarea :id="id" :rows="rows"></textarea>
  </div>
</template>

<script>
export default {
  name: 'AppTextArea',

  props: {
    id: {
      type: String,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    rows: {
      type: Number,
      default: 5
    }
  }
};
</script>
