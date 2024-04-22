<template>
  <select :value="modelValue" @change="changeOption" class="select-list">
    <option value="" disabled>Выберите из списка</option>
    <option class="select-list__option" v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
  </select>
</template>

<script>
export default {
  name: 'select-list',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },
  methods: {
    changeOption(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped type="scss">
.select-list {
  height: 56px;
  padding: 5px 15px;
  border: none;
  outline: none;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);

  font-family: var(--font-family);
  font-weight: 400;
  font-size: 14px;
  line-height: 143%;
  color: var(--input-color);

  &:active,
  &:focus {
    border: none;
    outline: none;
  }

  &__option {
    &:hover {
      color: var(--black-color);
    }
  }
}
</style>
