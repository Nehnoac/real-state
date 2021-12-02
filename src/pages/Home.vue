<template>
  <div class="home">
    <section class="section-about-us container section">
      <h1>Más Sobre Nosotros</h1>
      <div class="icons-us">
        <description-card
          v-for="card in DESCRIPTION"
          :key="card.id"
          :card="card"
        ></description-card>
      </div>
    </section>

    <section class="section-properties section container">
      <h2>Casas y Departamentos en Venta</h2>
      <div class="section-properties__container">
        <property-card
          v-for="property in PROPERTIES"
          :key="`property-${property.id}`"
          :property="property"
        ></property-card>
      </div>
      <div class="align-rigth">
        <a href="/properties" class="green-button">Ver Todas</a>
      </div>
    </section>

    <section class="contact-site section contact-img">
      <h2>Encuentra la casa de tus sueños</h2>
      <p>
        Completa el formulario de contacto y un asesor se pondrá en contacto a
        la brevedad.
      </p>
      <a href="/contact" class="yellow-button">Contáctanos</a>
    </section>

    <div class="container section blog-container">
      <section class="blog">
        <h3>Nuestro Blog</h3>
        <blog-entry
          v-for="article in BLOG_ARTICLES"
          :key="article.id"
          :article="article"
        ></blog-entry>
      </section>

      <section class="coments">
        <h3>Comentarios</h3>
        <div class="coment">
          <blockquote>
            El personal se comportó de una excelente forma, muy buena atención y
            la casa que me ofrecieron es preciosa. Superó todas mis
            expectativas!
          </blockquote>
          <p>- Carlos Andres Dibala</p>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { BLOG_ARTICLES } from '@/__mocks__';
import { PROPERTIES } from '@/__mocks__';
import { DESCRIPTION } from '@/__mocks__';
import BlogEntry from '@/components/blog/BlogEntry.vue';
import PropertyCard from '@/components/properties/PropertyCard.vue';
import DescriptionCard from '@/components/home/DescriptionCard.vue';

export default {
  name: 'Home',

  components: {
    BlogEntry,
    PropertyCard,
    DescriptionCard
  },

  created() {
    this.BLOG_ARTICLES = BLOG_ARTICLES.slice(0, 2);
    this.PROPERTIES = PROPERTIES.slice(0, 3);
    this.DESCRIPTION = DESCRIPTION;
  }
};
</script>
