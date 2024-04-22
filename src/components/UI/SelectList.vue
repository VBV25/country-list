<template>
    <select :value="modelValue"  @change="changeOption">
        <option value="" disabled>Выберите из списка</option>
        <option v-for="option in options" :key="option.value" :value="option.value">{{ option.name }}</option>
    </select>
</template>

<script>
export default {
    name: 'select-list',
    props: {
        modelValue: {
            type: String
        },
        options: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {};
    },
    methods: {
        changeOption(event){
            this.$emit('update:modelValue', event.target.value)
        }
    },
};
</script>

<style scoped type='scss'></style>