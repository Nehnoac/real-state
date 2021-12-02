<template>
  <div class="property-card">
    <picture>
      <source :srcset="property.image" type="image/jpeg" />
      <img loading="lazy" :src="property.image" alt="anuncio" />
    </picture>
    <div class="property-card__container">
      <h2>{{ property.title }}</h2>
      <p>
        {{ property.review }}
      </p>
      <p class="property-card__price">{{ property.price }}</p>
      <ul class="property-card__services">
        <li>
          <img
            loading="lazy"
            src="/images/properties/services/bathrooms.svg"
            alt="bathroom icon"
          />
          <p>{{ property.services.bathrooms }}</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="/images/properties/services/parking-lot.svg"
            alt="parking-lot icon"
          />
          <p>{{ property.services.parkingLots }}</p>
        </li>
        <li>
          <img
            loading="lazy"
            src="/images/properties/services/rooms.svg"
            alt="rooms icon"
          />
          <p>{{ property.services.rooms }}</p>
        </li>
      </ul>

      <a class="button yellow-button" @click="openProperty">Ver Propiedad</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PropertyCard',

  props: {
    property: {
      type: Object,
      required: true
    }
  },

  methods: {
    openProperty() {
      this.$router.push({
        name: 'property',
        params: { id: this.property.id }
      });
    }
  }
};
</script>
