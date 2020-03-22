<template>
  <v-navigation-drawer
    v-model="isOpened"
    absolute
    right
    stateless
  >
    Teste Nav
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'FilterNav',

  props: {
    isOpened: Boolean,
  },

  data: () => ({
  }),
};
</script>

<style lang="scss">

</style>
