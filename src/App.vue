<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script>
import emptyLayout from '@/layouts/emptyLayout.vue';
import mainLayout from '@/layouts/mainLayout.vue';

export default {
  computed: {
    layout() {
      return `${this.$route.meta.layout || 'empty'}-layout`;
    },
  },
  components: {
    emptyLayout,
    mainLayout,
  },
};
</script>
