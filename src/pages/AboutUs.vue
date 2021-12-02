<template>
  <div class="about-us-container">
    <h1>Conoce sobre Nosotros</h1>
    <div class="about-us">
      <picture class="about-us__image">
        <source srcset="@/assets/img/nosotros.jpg" type="image/jpeg" />
        <img
          loading="lazy"
          src="@/assets/img/nosotros.jpg"
          alt="imagen nosotros"
        />
      </picture>
      <div class="about-us__text">
        <h4>25 Años de Experiencia</h4>
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
  name: 'AboutUs'
};
</script>
