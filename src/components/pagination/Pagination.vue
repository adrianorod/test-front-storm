<template>
  <div class="text-center mt-6 pagination">
    <v-btn
      :disabled="page === 1"
      @click.prevent="updatePage(1)"
      color="#D83367"
      data-test="btn-first"
      depressed
      min-height="48"
    >
      Primeiro
    </v-btn>
    <v-btn
      :disabled="page === 1"
      @click.prevent="updatePage(page - 1)"
      color="#D83367"
      depressed
      min-height="48"
    >
      Anterior
    </v-btn>

    <v-btn
      :key="item"
      @click.prevent="updatePage(item)"
      color="#D83367"
      data-test="btn-page"
      depressed
      min-height="48"
      min-width="48"
      v-for="item in pageCount"
    >
      {{ item }}
    </v-btn>

    <v-btn
      :disabled="page === pageCount"
      @click.prevent="updatePage(page + 1)"
      color="#D83367"
      data-test="btn-next"
      depressed
      min-height="48"
    >
      Próximo
    </v-btn>
    <v-btn
      :disabled="page === pageCount"
      @click.prevent="updatePage(pageCount)"
      color="#D83367"
      depressed
      min-height="48"
    >
      Último
    </v-btn>
  </div>
</template>

<script>
export default {
  name: 'Pagination',

  props: {
    page: Number,
    pageCount: Number,
  },

  methods: {
    updatePage(page) {
      this.$emit('update:page', page);
    },
  },
};
</script>

<style lang="scss">
.pagination {
  > .v-btn {
    color: #fff;
    font-weight: 300;
    letter-spacing: 0;
    margin: 0 4px;
    text-transform: capitalize;

    &--disabled,
    &.theme--light.v-btn--disabled:not(.v-btn--flat):not(.v-btn--text):not(.v-btn--outlined) {
      background-color: #FAFAFA !important;
    }
  }
}
</style>
