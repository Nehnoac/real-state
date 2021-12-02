<template>
  <div class="blog">
    <h1>Nuestro Blog</h1>
    <section class="blog center-content">
      <blog-entry
        v-for="article in BLOG_ARTICLES"
        :key="article.id"
        :article="article"
      ></blog-entry>
    </section>
  </div>
</template>

<script>
import { BLOG_ARTICLES } from '@/__mocks__';
import BlogEntry from '@/components/blog/BlogEntry.vue';

export default {
  name: 'Blog',

  components: {
    BlogEntry
  },

  created() {
    this.BLOG_ARTICLES = BLOG_ARTICLES;
  }
};
</script>
