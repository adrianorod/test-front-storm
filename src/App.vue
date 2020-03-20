<template>
  <v-app class="app">
    <Header />
    <v-content>
      <v-container fluid class="px-9 py-6">
        <UserList />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/header/Header.vue';
import UserList from './components/user-list/UserList.vue';

export default {
  name: 'App',

  components: {
    Header,
    UserList,
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
