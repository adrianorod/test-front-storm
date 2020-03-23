<template>
  <v-navigation-drawer
    app
    class="filter-nav"
    right
    stateless
    temporary
    v-model="isOpened"
    width="480"
  >
    <v-card height="100%">
      <v-card-title class="pa-6 d-flex justify-space-between">
        <div>
          <v-icon size="24" color="#999">mdi-tune</v-icon>
          <span class="text">filtros</span>
        </div>
        <v-btn
          @click.prevent="updateIsOpened(false)"
          class="mx-2 px-0"
          color="#ffffff"
          height="48"
          min-width="0"
          width="48"
        >
          <v-icon size="20" color="#666">mdi-close</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions>
        <v-container>
          <v-row>
            <v-card-text class="mt-1">
              Utilize os filtros abaixo para refinar os resultados da tabela,
              clique no botão APLICAR para salvar as alterações.
            </v-card-text>
          </v-row>
          <v-row>
            <v-expansion-panels class="action-list" multiple>
              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-icon size="20" color="#999">mdi-calendar-range</v-icon>
                  <span class="text">
                    {{
                      inclusionDateModel.length === 0 ||
                      inclusionDateModel.length === inclusionDates.length ? (
                        'todas as datas de inclusão'
                      ) : (
                        inclusionDateModel
                      )
                    }}
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-model="inclusionDateModel"
                    v-for="(item,i) in inclusionDates"
                    :key="i"
                    :label="item"
                    :value="item"
                    color="#D83367"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-icon size="20" color="#999">mdi-calendar-range</v-icon>
                  <span class="text">
                    {{
                      changeDateModel.length === 0 ||
                      changeDateModel.length === changeDates.length ? (
                        'todas as datas de alteração'
                      ) : (
                        changeDateModel
                      )
                    }}
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-model="changeDateModel"
                    v-for="(item,i) in changeDates"
                    :key="i"
                    :label="item"
                    :value="item"
                    color="#D83367"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>

              <v-expansion-panel>
                <v-expansion-panel-header>
                  <v-icon size="20" color="#999">mdi-calendar-range</v-icon>
                  <span class="text">
                    {{
                      statusModel.length === 0 ||
                      statusModel.length === status.length ? (
                        'ativos e inativos'
                      ) : (
                        statusModel.map((item) => item ? 'ATIVO' : 'INATIVO')
                      )
                    }}
                  </span>
                </v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-checkbox
                    v-model="statusModel"
                    v-for="(item,i) in status"
                    :key="i"
                    :label="item ? 'ATIVO' : 'INATIVO'"
                    :value="item"
                    color="#D83367"
                  />
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row>
        </v-container>
      </v-card-actions>
    </v-card>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'FilterNav',

  props: {
    isOpened: Boolean,
  },

  data: () => ({
    inclusionDateModel: [],
    changeDateModel: [],
    statusModel: [],
  }),

  computed: {
    inclusionDates() {
      return this.$store.getters['users/inclusionDates'];
    },
    changeDates() {
      return this.$store.getters['users/changeDates'];
    },
    status() {
      return this.$store.getters['users/status'];
    },
  },

  methods: {
    updateIsOpened(state) {
      this.$emit('update:is-opened', state);
    },
  },
};
</script>

<style lang="scss">
.filter-nav {
  .v-card {
    &.theme--light {
      background-color: #F5F5F5;
    }

    &__title {
      background-color: #fff;

      > div > .text {
        margin-left: 20px;
        text-transform: uppercase;
      }
    }

    &__text {
      color: #666;
      font-size: .95rem;
      font-style: oblique;
    }

    &__actions {
      .action-list {
        margin: 0 16px;

        .v-expansion-panel {
          background-color: transparent;
          border-bottom: 2px solid #E9E9E9;

          &:before {
            box-shadow: none;
          }

          &-header {
            padding: 24px 0;

            .v-icon {
              max-width: 28px;
            }

            .text {
              margin-left: 12px;
              color: #D83367;
              text-transform: uppercase;
              font-weight: 500;
            }
          }
        }
      }
    }
  }
}
</style>
