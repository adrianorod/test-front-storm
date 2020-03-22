<template>
  <v-app class="app">
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
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
