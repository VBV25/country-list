<template>
  <header-block></header-block>
  <main class="main">
    <section class="main__navigation">
      <button class="main__navigation-btn" type="button" @click="comeBack">
        <img src="@/assets/img/call-made.svg" alt="arrow-back" />
        Back
      </button>
    </section>
    <section class="main__info-container info">
      <div class="info__flag">
        <img class="info__flag-img" :src="this.readCurrentCountry.flags.png ? readCurrentCountry.flags.png : readCurrentCountry.flag" alt="flag" />
      </div>
      <div class="info__text-container">
        <h2 class="info__title">{{ readCurrentCountry.name }}</h2>
        <div class="info__lists-wrapper">
          <div class="info__text-list">
            <p class="info__text"><b>Native Name:</b> {{ readCurrentCountry.nativeName }}</p>
            <p class="info__text"><b>Population:</b> {{ readCurrentCountry.population }}</p>
            <div class="info__text"><b>Region:</b> {{ readCurrentCountry.region }}</div>
            <div class="info__text"><b>Capital:</b> {{ readCurrentCountry.capital }}</div>
          </div>
          <div class="info__text-list">
            <div class="info__text"><b>Top Level Domain:</b> {{ formattedTopLevelDomains }}</div>
            <div class="info__text"><b>Currencies:</b> {{ formattedCountryCurrencies }}</div>
            <div class="info__text"><b>Languages:</b> {{ formattedLanguages }}</div>
          </div>
        </div>
        <div class="info__border-countries-wrapper">
          <p class="info__border-countries-title"><b>Border Countries:</b></p>
          <div class="info__border-countries-list">
            <div v-for="borderCountry in searchBorderCountries" class="info__border-countries">{{ borderCountry }}</div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import HeaderBlock from '@/components/HeaderBlock.vue';

export default {
  name: 'info-page',
  components: {
    HeaderBlock,
  },
  data() {
    return {};
  },

  computed: {
    ...mapGetters({
      readCurrentCountry: 'readCurrentCountry',
      readCountriesList: 'readCountriesList',
    }),

    formattedTopLevelDomains() {
      let arr = [];
      this.readCurrentCountry.topLevelDomain.forEach((element) => {
        arr.push(element);
      });
      return arr.length > 1 ? arr.join(', ') : arr[0];
    },
    formattedCountryCurrencies() {
      let arr = [];
      this.readCurrentCountry.currencies.forEach((element) => {
        arr.push(element.name);
      });
      return arr.length > 1 ? arr.join(', ') : arr[0];
    },
    formattedLanguages() {
      let arr = [];
      this.readCurrentCountry.languages.forEach((element) => {
        arr.push(element.name);
      });
      return arr.length > 1 ? arr.join(', ') : arr[0];
    },

    searchBorderCountries() {
      let arr = [];
      console.log(this.readCurrentCountry);
      if (!this.readCurrentCountry.borders) return;
      this.readCurrentCountry.borders.forEach((element) => {
        let borderCountry = this.readCountriesList.find((country) => country.alpha3Code.toLowerCase().includes(element.toLowerCase()));
        arr.push(borderCountry.name);
      });
      return arr;
    },
  },

  methods: {
    comeBack() {
      this.$router.push('/');
    },
  },
};
</script>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100%;
  padding: 24px 16px;

  &__navigation {
    margin-bottom: 90px;
  }

  &__navigation-btn {
    border-radius: 6px;
    width: 136px;
    height: 40px;
    box-shadow: 0 0 7px 0 rgba(0, 0, 0, 0.29);
    background: var(--background-color);
    border: none;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    font-family: var(--font-family);
    font-weight: 300;
    font-size: 16px;
    line-height: 125%;
    color: var(--black-color);
  }

  &__info-container {
    width: 100%;
  }
}

.info {
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
  gap: 120px;

  &__text-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__flag {
    width: 320px;
    height: 229px;
    border-radius: 10px;
    box-shadow: 0 0 14px 4px rgba(0, 0, 0, 0.03);
    background: var(--input-color);
  }

  &__flag-img {
    width: 100%;
    height: 100%;
  }

  &__title {
    margin-bottom: 28px;
  }

  &__lists-wrapper {
    margin-bottom: 68px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    column-gap: 10px;
    row-gap: 35px;
  }

  &__border-countries-wrapper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }

  &__border-countries-title {
    min-width: max-content;
    margin-right: 15px;
  }

  &__border-countries-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  &__border-countries {
    width: max-content;
    padding: 5px 30px;
    box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
    border: 0px solid var(--input-color);
    border-radius: 2px;

    font-family: var(--font-family);
    font-weight: 300;
    font-size: 14px;
    color: var(--elements-color);
  }
}
@media (min-width: 700px) {
  .info {
    grid-template-columns: max-content 1fr;
    gap: 120px;
  }
}

@media (min-width: 1008px) {
  .main {
    padding: 48px 80px;
  }
  .info {
    &__flag {
      width: 560px;
      height: 401px;
      border-radius: 10px;
      box-shadow: 0 0 14px 4px rgba(0, 0, 0, 0.03);
      background: var(--input-color);
    }
  }
}

@media (min-width: 1350px) {
  .info {
    &__border-countries-wrapper {
      flex-wrap: nowrap;
    }
  }
}
</style>
