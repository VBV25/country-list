<template>
  <div class="header">
    <h1 class="header__title">Where in the world?</h1>
  </div>
</template>

<script>
export default {
  name: 'header-block',
};
</script>

<style scoped lang="scss">
.header {
  width: 100%;
  height: max-content;
  padding: 23px 81px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.06);

  &__title {
    cursor: default;
    color: var(--text-color);
    font-size: 24px;
    font-weight: 800;
  }
}
</style>
