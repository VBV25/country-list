<template>
  <router-view></router-view>
  <up-button></up-button>
</template>

<script>
import { RouterView } from 'vue-router';
import { mapActions, mapGetters } from 'vuex';

import UpButton from '@/components/UI/UpButton.vue';

export default {
  name: 'App',
  components: { RouterView, UpButton },

  data() {
    return {
      userImg: '',
    };
  },
  computed: {
    ...mapGetters({
      readCountriesList: 'readCountriesList',
    }),
  },
  methods: {
    ...mapActions({
      getCountriesList: 'getCountriesList',
      rewriteCurrentCountry: 'rewriteCurrentCountry',
    }),
  },

  async created() {
    await this.getCountriesList();
    const firstCountry = await this.readCountriesList[0];
    await this.rewriteCurrentCountry(firstCountry);
  },
};
</script>

<style></style>
