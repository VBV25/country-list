<template>
  <!--<div @click="clearStyleActive($event)" class="tasklist-content">
    <navigation-menu />
    <list-boards />
    <main>
      <tasklist-header />
      <div class="list-column">
        <div class="list-column__wrapper">
          <column-tasks v-for="column in columnsTasksList" :key="column.id" :current-column="column" />
        </div>
      </div>
    </main>
  </div>
  <popup-todo-list />
  <error-popup />
  <confirmation-deletion />-->
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
    return {
      // columnsTasksList: this.columnsList,
    };
  },

  computed: {
    ...mapGetters({
      readCurrentCountry: 'readCurrentCountry',
    }),
  },

  watch: {},

  methods: {
    // ...mapActions({
    //   //changeUserId: 'userStore/changeUserId',
    // }),
  },

  created() {
    console.log(this.readCurrentCountry);
  },
};
</script>
