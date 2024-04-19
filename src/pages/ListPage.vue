<template>
  <header-block></header-block>
  <main class="main">
    <section class="main__toolbar">Здесь будет фильтр и сортировка</section>
    <section class="main__cards-container">
      <card-mini v-for="country in readCountriesList" :key="country.alpha3Code" :country="country" @click="changePage(country)"></card-mini>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import HeaderBlock from '@/components/HeaderBlock.vue';
import CardMini from '@/components/CardMini.vue';

export default {
  name: 'list-pages',
  components: {
    HeaderBlock,
    CardMini,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      readCountriesList: 'readCountriesList',
    }),
  },
  methods: {
    ...mapActions({
      rewriteCurrentCountry: 'rewriteCurrentCountry',
    }),
    changePage(country) {
      this.rewriteCurrentCountry(country);
      this.$router.push('/country-information');
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  padding: 48px 80px;

  &__cards-container {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 260px);
    justify-content: space-around;
    gap: 30px;
  }
}

@media (min-width: 1008px) {
  .main {
    &__cards-container {
      justify-content: space-between;
    }
  }
}
</style>
