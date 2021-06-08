<template>
  <div class="wrapper">
    <Header />
    <main class="page">
      <Panel />
      <router-view />
    </main>
  </div>
</template>

<script>
import Panel from '@/components/app/Panel.vue';
import Header from '@/components/app/Header.vue';

export default {
  name: 'main-layout',
  components: {
    Panel,
    Header,
  },
};
</script>
