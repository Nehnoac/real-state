<template>
  <div class="icon">
    <img :src="`/images/home/${card.icon}`" alt="icono" loading="lazy" />
    <h3>{{ card.title }}</h3>
    <p>{{ card.paragraph }}</p>
  </div>
</template>

<script>
export default {
  name: 'DescriptionCard',

  props: {
    card: {
      type: Object,
      required: true
    }
  }
};
</script>
