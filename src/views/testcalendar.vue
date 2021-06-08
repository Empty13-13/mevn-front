<template>
  <header class="header">
    <div class="header__left">
      LOGO
    </div>
    <div class="header__right"></div>
  </header>
</template>

<script>
export default {
  name: 'MevnHeader',
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style lang="scss">
@import '`/fullcalendar/dist/fullcalendar.css';
</style>
