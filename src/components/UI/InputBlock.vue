<template>
  <input :value="modelValue" @input="updateInput" class="input" :type="typeInput" />
</template>

<script>
export default {
  name: 'input-block',
  props: {
    typeInput: {
      type: String,
      required: true,
    },
    modelValue: {
      type: [String, Number],
    },
  },
  data() {
    return {};
  },
  methods: {
    updateInput(event) {
      this.$emit('update:modelValue', event.target.value);
    },
  },
};
</script>

<style scoped type="scss">
.input {
  width: 100%;
  max-width: 480px;
  height: 56px;
  padding-left: 75px;
  border-radius: 5px;
  box-shadow: 0 2px 9px 0 rgba(0, 0, 0, 0.05);
  border: none;
  outline: none;

  background: url('@/assets/img/search.svg');
  background-size: 18px 18px;
  background-repeat: no-repeat;
  background-position: 32px center;

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
}
</style>
