<template>
  <div class="login">
    <form @submit.prevent="submitHandler" class="login__block">
      <div class="login__body">
        <a href="" class="login__logo">
          <img src="../../public/img/icons/logo.svg" alt="" />
        </a>
        <input
          autocomplete="off"
          type="text"
          name="form[]"
          placeholder="Login"
          class="input login__inp-login"
          v-model.trim="username"
          :class="{
            _invalid:
              ($v.username.$dirty && !$v.username.required) ||
              ($v.username.$dirty && !$v.username.minLength),
          }"
        />
        <small
          class="login__helper-text"
          v-if="$v.username.$dirty && !$v.username.required"
          >Поле Email не должно быть пустым</small
        >
        <small
          class="login__helper-text"
          v-else-if="$v.username.$dirty && !$v.username.minLength"
          >Логин должен быть не менее
          {{ $v.username.$params.minLength.min }} символов</small
        >
        <input
          autocomplete="off"
          type="password"
          name="form[]"
          placeholder="Password"
          class="input login__inp-password"
          v-model.trim="password"
          :class="{
            _invalid:
              ($v.password.$dirty && !$v.password.required) ||
              ($v.password.$dirty && !$v.password.minLength),
          }"
        />
        <small
          class="login__helper-text"
          v-if="$v.password.$dirty && !$v.password.required"
          >Введите пароль</small
        >
        <small
          class="login__helper-text"
          v-else-if="$v.password.$dirty && !$v.password.minLength"
          >Пароль должен быть не менее {{ $v.password.$params.minLength.min }} символов.
          Сейчас {{ password.length }}</small
        >
        <button type="submit" class="login__btn btn">Войти</button>
      </div>
    </form>
  </div>
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'login',
  data: () => ({
    username: '',
    password: '',
  }),
  validations: {
    username: { required, minLength: minLength(4) },
    password: { required, minLength: minLength(4) },
  },
  async beforeCreate() {
    const accessToken = this.$getCookie('accessToken');

    if (accessToken) {
      try {
        await this.verify(accessToken);
        this.$router.push('/');
      } catch (error) {}
    }
  },
  methods: {
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        username: this.username,
        password: this.password,
      };

      try {
        await this.login(formData);
        this.$toast.success('Авторизация прошла успешно');
        this.$router.push('/');
      } catch (error) {}
    },
    //?VUEX
    ...mapActions({
      login: 'login',
      verify: 'verify',
    }),
  },
  computed: {},
};
</script>

<style lang="scss">
.login {
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  // .login__block

  &__logo {
    margin-bottom: 10%;
    background: #171919;
    padding: 15px;
  }

  &__block {
    width: 568px;
    height: 479px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
  }

  // .login__body

  &__body {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  // .login__inp-login

  &__inp-login {
  }

  // .login__inp-password

  &__inp-password {
  }

  // .login__btn

  &__btn {
    background: #171919;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 18px;
    display: flex;
    align-items: center;
    text-align: center;
    letter-spacing: 0.285em;
    color: #fff;
    padding: 10px 53px;
  }

  &__helper-text {
    margin-top: 5px;
    margin-bottom: 29px;
    color: red;
  }
}

.input {
  font-family: Fira Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 15px;
  line-height: 18px;
  padding: 10px;
  margin-bottom: 29px;
  letter-spacing: 0.285em;
  color: #707070;
  background: #fff;
  width: 60%;
  position: relative;

  border-bottom: 1px solid #171919;

  &._invalid {
    border-bottom: 1px solid red;
    margin-bottom: 0;
  }
}
</style>
