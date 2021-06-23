<template>
  <div class="empty__wrapper">
    <div class="empty__img">
      <img src="../../public/img/empty.jpg" alt="" class="empty__img" />
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  computed: {
    error() {
      return this.$store.getters.error;
    },
    message() {
      return this.$store.getters.message;
    },
  },
  watch: {
    error(fbError) {
      this.$toast.open({
        message: fbError.response?.data?.message || 'Произошла ошибка',
        type: 'error',
      });
    },
    message(fbError) {
      this.$toast.succes({
        message: fbError.response?.data?.message,
      });
    },
  },
};
</script>

<style lang="scss">
.empty {
  // .empty__wrapper

  &__wrapper {
    position: relative;
  }

  // .empty__img

  &__img {
    position: absolute;
    z-index: -1;
    object-fit: cover;
    width: 100vw;
    height: 100vh;
  }
}
</style>
