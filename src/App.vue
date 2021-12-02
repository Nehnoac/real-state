<template>
  <div class="app" :class="{ 'dark-mode': darkMode }">
    <the-header :class="{ index: isHome }"
      ><h1 v-if="isHome">
        Venta de Casas y Departamentos Exclusivos de Lujo
      </h1></the-header
    >
    <main>
      <router-view></router-view>
    </main>
    <the-footer></the-footer>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';

export default {
  components: {
    TheHeader,
    TheFooter
  },

  computed: {
    ...mapState({
      darkMode: state => state.darkMode
    }),

    isHome() {
      return this.$route.name === 'home';
    }
  }
};
</script>
