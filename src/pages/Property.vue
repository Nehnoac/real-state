<template>
  <div class="house">
    <h1>Casa en Venta frente al Lago</h1>
    <div class="sale">
      <picture class="sale__image">
        <source srcset="/images/properties/property-1.jpg" type="image/jpeg" />
        <img
          loading="lazy"
          src="/images/properties/property-1.jpg"
          alt="imagen propiedad"
        />
      </picture>
      <div class="sale__text">
        <div class="sale__info">
          <p class="sale__info__price">$3.000.000</p>
          <ul class="sale__info__services">
            <li>
              <img
                loading="lazy"
                src="/images/properties/services/bathrooms.svg"
                alt="icono wc"
              />
              <p>3</p>
            </li>
            <li>
              <img
                loading="lazy"
                src="/images/properties/services/parking-lot.svg"
                alt="icono estacionamiento"
              />
              <p>3</p>
            </li>
            <li>
              <img
                loading="lazy"
                src="/images/properties/services/rooms.svg"
                alt="icono habitaciones"
              />
              <p>4</p>
            </li>
          </ul>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae natus,
          impedit unde laborum animi corrupti modi dolorem dolore in dolor, odit
          eos sit tenetur? Hic error veritatis voluptatibus magni optio. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Fuga illo pariatur
          eum, iusto maiores culpa nihil quidem impedit officiis itaque
          molestiae rem. Omnis, voluptatibus. Culpa consectetur numquam nam iure
          odit?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur id
          dolorem necessitatibus accusantium, ullam nisi vel voluptas vitae
          corrupti perspiciatis illum iusto quaerat voluptatibus ipsam minima a?
          Ea, odio. Placeat.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Property'
};
</script>
