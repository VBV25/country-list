<template>
  <div>
    <button @click="scrollToTop" class="scroll-top-button" :class="{ 'scroll-top-button_visible': showButton }">Наверх</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showButton: false,
    };
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
    this.handleScroll();
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.showButton = window.scrollY > 100;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
  },
};
</script>

<style lang="scss">
.scroll-top-button {
  cursor: pointer;
  display: none;
  position: fixed;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: var(--input-color);
  color: white;
  border-radius: 5px;

  &_visible {
    display: block;
  }
}
</style>
