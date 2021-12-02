<template>
  <header class="">
    <div class="header-container">
      <a href="/"><img src="@/assets/img/logo.svg" alt="logo"/></a>
      <nav class="navbar">
        <a href="/about-us">Nosotros</a>
        <a href="/properties">Propiedades</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contacto</a>
        <img
          :class="darkMode ? 'light-mode-button' : 'dark-mode-button'"
          :src="
            require(darkMode
              ? '@/assets/img/light-mode.svg'
              : '@/assets/img/dark-mode.svg')
          "
          :alt="darkMode ? 'light-mode' : 'dark-mode'"
          @click="toggleDarkMode"
        />
        <!-- <img
          class="dark-mode-button visible"
          src="@/assets/img/dark-mode.svg"
          alt="dark-mode"
          @click="toggleDarkMode"
        />
        <img
          class="light-mode-button"
          src="assets/img/light-mode.svg"
          alt="light-mode"
          @click="toggleDarkMode"
        /> -->
      </nav>
    </div>
    <slot></slot>
  </header>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'TheHeader',

  computed: {
    ...mapState({
      darkMode: state => state.darkMode
    })
  },

  methods: {
    ...mapActions(['toggleDarkMode'])
  }
};
</script>
