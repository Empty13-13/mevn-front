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
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'main-layout',
  components: {
    Panel,
    Header,
  },
  async mounted() {
    let accessToken = this.$getCookie('accessToken');
    let refreshToken = this.$getCookie('refreshToken');
    if (!accessToken) {
      if (!refreshToken) {
        this.$toast.open({
          message: 'Вы не авторизованы',
          type: 'error',
          // all of other options may go here
        });
        this.$router.push('/login');
      } else {
        try {
          await this.refreshToken(refreshToken);
        } catch (error) {
          this.$toast.open({
            message: 'Вы не авторизованы',
            type: 'error',
            // all of other options may go here
          });
          this.$router.push('/login');
        }
      }
    } else {
      try {
        await this.verify(accessToken);
      } catch (error) {
        this.$toast.open({
          message: 'Вы не авторизованы',
          type: 'error',
        });
        this.$router.push('/login');
      }
    }
  },
  methods: {
    //?VUEX
    ...mapActions({
      refreshToken: 'refreshToken',
      verify: 'verify',
    }),
  },
  computed: {
    error() {
      return this.$store.getters.error;
    },
    message() {
      return this.$store.getters.message;
    },
    ...mapGetters({
      username: 'username',
      accessToken: 'accessToken',
    }),
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
