<template>
  <div class="card-mini">
    <div class="card-mini__img-wrapper" :style="{ backgroundImage: `url(${country.flag})` }"></div>
    <h2 class="card-mini__title">{{ country.name }}</h2>
    <div class="card-mini__info">
      <p class="card-mini__text"><b>Population:</b> {{ country.population }}</p>
      <p class="card-mini__text"><b>Region:</b> {{ country.region }}</p>
      <p class="card-mini__text"><b>Capital:</b> {{ country.capital }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: '',
  components: {},
  props: {
    country: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {};
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
    border-bottom: 1px solid rgb(231, 231, 231);

    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
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
