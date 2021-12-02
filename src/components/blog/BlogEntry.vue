<template>
  <article class="blog-entry">
    <div class="blog-entry__image" @click="openBlogArticle">
      <picture>
        <source :srcset="article.image" type="image/jpeg" />
        <img loading="lazy" :src="article.image" alt="Blog article image" />
      </picture>
    </div>
    <div class="blog-entry__text">
      <a @click="openBlogArticle">
        <h4>{{ article.title }}</h4>
      </a>
      <p>
        Escrito el: <span>{{ article.date }}</span> por
        <span>{{ article.author }}</span>
      </p>
      <p>
        {{ article.abstract }}
      </p>
      <a class="blog-entry__button" @click="openBlogArticle">
        Leer Más &rarr;
      </a>
    </div>
  </article>
</template>

<script>
export default {
  name: 'BlogEntry',

  props: {
    article: {
      type: Object,
      required: true
    }
  },

  methods: {
    openBlogArticle() {
      this.$router.push({
        name: 'blog-article',
        params: { id: this.article.id }
      });
    }
  }
};
</script>
