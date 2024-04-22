<template>
  <div class="card-mini" v-for="country in countriesList" :key="country.alpha3Code" @click="changePage(country)">
    <div class="card-mini__img-wrapper">
      <img class="card-mini__img" :src="country.flags.png" alt="flag" />
    </div>
    <h2 class="card-mini__title">{{ country.name }}</h2>
    <div class="card-mini__info">
      <p class="card-mini__text"><b>Population:</b> {{ country.population }}</p>
      <p class="card-mini__text"><b>Region:</b> {{ country.region }}</p>
      <p class="card-mini__text"><b>Capital:</b> {{ country.capital }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'card-mini',
  props: {
    countriesList: {
      type: Array,
    },
  },
  data() {
    return {};
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
//variables
$paddingLeft: 20px;

//style
.card-mini {
  cursor: pointer;
  width: 264px;
  height: 336px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 0 7px 2px rgba(0, 0, 0, 0.03);

  &__img-wrapper {
    width: 100%;
    height: 160px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid rgb(231, 231, 231);
  }

  &__img {
    width: 100%;
    height: 100%;
  }

  &__title {
    padding-left: $paddingLeft;
    font-weight: normal;
  }

  &__info {
    padding-left: $paddingLeft;
    display: flex;
    flex-direction: column;
    gap: 7px;
  }
}
</style>
