<template>
  <div class="blog-article">
    <h1>{{ BLOG_ARTICLE.title }}</h1>
    <div class="article">
      <picture class="article__image">
        <source :srcset="BLOG_ARTICLE.image" type="image/jpeg" />
        <img
          loading="lazy"
          :src="BLOG_ARTICLE.image"
          alt="imagen entraga blog"
        />
        <p class="article__image-info">
          Escrito el: <span>{{ BLOG_ARTICLE.date }}</span> por:
          <span>{{ BLOG_ARTICLE.author }}</span>
        </p>
      </picture>
      <div class="article__text">
        <p
          v-for="(paragraph, i) in BLOG_ARTICLE.paragraphs"
          :key="`paragraph-${i}`"
        >
          {{ paragraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { BLOG_ARTICLES } from '@/__mocks__/blog';

export default {
  name: 'BlogArticle',

  created() {
    const id = parseInt(this.$route.params.id);
    this.BLOG_ARTICLE = BLOG_ARTICLES.find(article => article.id === id) || {};

    if (!this.BLOG_ARTICLE.id) {
      alert('El id del articulo es inexistente!'); // PONER NOT FOUND
      this.$router.push({ name: 'blog' });
    }
  }
};
</script>
