<template>
  <v-app class="app">
    <Header />

    <v-content>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/header/Header.vue';

export default {
  name: 'App',

  components: {
    Header,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss" scoped>
.app {
  &.theme--light {
    background: #F5F5F5;
  }
}
</style>
