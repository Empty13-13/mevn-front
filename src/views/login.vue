<template>
  <div class="login">
    <form action="" class="login__block">
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
        />
        <input
          autocomplete="off"
          type="password"
          name="form[]"
          placeholder="Password"
          class="input login__inp-password"
        />
        <button type="submit" class="login__btn btn">Войти</button>
      </div>
    </form>
  </div>
</template>

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

  border-bottom: 1px solid #171919;
}
</style>
