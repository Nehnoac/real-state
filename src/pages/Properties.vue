<template>
  <div class="properties section container">
    <h2>Casas y Departamentos en Venta</h2>
    <div class="properties__container">
      <property-card
        v-for="property in PROPERTIES"
        :key="`property-${property.id}`"
        :property="property"
      ></property-card>
    </div>
  </div>
</template>

<script>
import { PROPERTIES } from '@/__mocks__';
import PropertyCard from '../components/properties/PropertyCard.vue';

export default {
  name: 'Properties',

  components: {
    PropertyCard
  },

  created() {
    this.PROPERTIES = PROPERTIES;
  }
};
</script>
