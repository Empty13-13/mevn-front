<template>
  <li class="func-menu__item-menu">
    <a
      @click.prevent="lol(title)"
      :class="{ _active: isActive }"
      class="func-menu__href-menu"
      >{{ title }}</a
    >
  </li>
</template>

<script>
export default {
  name: 'SongBlock',
  data: () => ({
    isActive: false,
  }),
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  methods: {
    lol(e) {
      alert(e);
    },
  },
};
</script>
