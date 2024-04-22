<template>
  <header-block></header-block>
  <main class="main">
    <section class="main__toolbar">
      <input-block v-model="searchCountry" :type-input="'text'" placeholder="Search for a country"></input-block>
      <select-list v-model="selectedSort" :options="sortOptions" />
    </section>
    <section class="main__cards-container">
      <card-mini :countriesList="sortedAndSearchedCountry" v-if="!readError"></card-mini>
      <div v-else>Идет загрузка ...</div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import HeaderBlock from '@/components/HeaderBlock.vue';
import CardMini from '@/components/CardMini.vue';
import InputBlock from '@/components/UI/InputBlock.vue';
import SelectList from '@/components/UI/SelectList.vue';

export default {
  name: 'list-pages',
  components: {
    HeaderBlock,
    CardMini,
    InputBlock,
    SelectList
  },
  data() {
    return {
      countriesList: '',
      selectedSort: '',
      searchCountry: '',
      sortOptions: [
        { value: 'name', name: 'By name' },
        { value: 'population', name: 'By population' },
        { value: 'region', name: 'By region' },
      ]
    };
  },

  computed: {
    ...mapGetters({
      readCountriesList: 'readCountriesList',
      readError: 'readError'
    }),
    sortedCountries() {
      return [...this.countriesList].sort((country1, country2) => {
        if (typeof country1[this.selectedSort] === 'number' && typeof country2[this.selectedSort] === 'number') {
          return country1[this.selectedSort] - country2[this.selectedSort];
        }
        if (typeof country1[this.selectedSort] === 'string' && typeof country2[this.selectedSort] === 'string' ||
          typeof country1[this.selectedSort] === undefined && typeof country2[this.selectedSort] === undefined) {
          return country1[this.selectedSort]?.localeCompare(country2[this.selectedSort])
        }
      })
    },
    sortedAndSearchedCountry() {
      return this.sortedCountries.filter(country => country.name.toLowerCase().includes(this.searchCountry.toLowerCase()))
    }
  },
  methods: {
    ...mapActions({
      rewriteCurrentCountry: 'rewriteCurrentCountry',
      rewriteCountriesListSortedAndFiltered: 'rewriteCountriesListSortedAndFiltered'
    })
  },
  mounted() {
    this.countriesList = this.readCountriesList
  }
};
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  padding: 24px 16px;

  &__toolbar {
    margin-bottom: 24px;
  }

  &__cards-container {
    width: 100%;
    min-height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, 260px);
    justify-content: space-around;
    gap: 30px;
  }
}

@media (min-width: 1008px) {
  .main {
    padding: 48px 80px;           

    &__toolbar {
      margin-bottom: 48px;
    }

    &__cards-container {
      justify-content: space-between;
    }
  }
}
</style>

<!-- поиск иконка width: 18px;
height: 18px;  
мобилка 16px

стрелка width="20" height="20" 
мобилка 1
8px


кнопка назад  мобилка
border-radius: 2px;
width: 104px;
height: 32px;

    десктоп width: 136px;
height: 40px;


-->
