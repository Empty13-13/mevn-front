<template>
  <div class="panel">
    <div class="panel__content _container">
      <div class="panel__body">
        <div class="panel__rigth right-panel">
          <a
            @click.prevent="isNotes = true"
            @mouseleave="isNotes = false"
            class="right-panel__bell-btn btn"
          >
            <picture>
              <source srcset="img/panel/bell.svg" type="image/webp" />
              <img src="img/panel/bell.svg" alt="" />
            </picture>
            <ul class="right-panel__notes" :class="{ _active: isNotes }">
              <li class="right-panel__note _rep">
                <img
                  src="../../../public/img/songs/man.jpg"
                  alt=""
                  class="right-panel__note-img"
                />
                <div class="right-panel__note-block">
                  <div class="right-panel__note-name">Имя</div>
                </div>
              </li>
              <li class="right-panel__note _per">
                <img
                  src="../../../public/img/songs/man.jpg"
                  alt=""
                  class="right-panel__note-img"
                />
                <div class="right-panel__note-block">
                  <div class="right-panel__note-name">Имя</div>
                </div>
              </li>
              <li class="right-panel__note">
                <img
                  src="../../../public/img/songs/man.jpg"
                  alt=""
                  class="right-panel__note-img"
                />
                <div class="right-panel__note-block">
                  <div class="right-panel__note-name">Имя</div>
                </div>
              </li>
              <li class="right-panel__note">
                <img
                  src="../../../public/img/songs/man.jpg"
                  alt=""
                  class="right-panel__note-img"
                />
                <div class="right-panel__note-block">
                  <div class="right-panel__note-name">Имя</div>
                </div>
              </li>
            </ul>
          </a>
          <a
            @mouseover="upHere = true"
            @mouseleave="upHere = false"
            :class="{ _active: upHere }"
            class="right-panel__name"
          >
            <a href="" class="right-panel__profile-btn">
              <picture>
                <source srcset="img/panel/man.webp" type="image/webp" />
                <img src="img/panel/man.jpg" alt="" />
              </picture>
            </a>
            <span>{{ username }}</span>
            <ul class="right-panel__name-list" :class="{ _active: upHere }">
              <li class="right-panel__name-item">Настройки</li>
              <li class="right-panel__name-item" @click="logoutHandler">Выйти</li>
            </ul>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Panel',
  data: () => ({
    upHere: false,
    isNotes: false,
  }),
  methods: {
    async logoutHandler() {
      try {
        const refreshToken = this.$getCookie('refreshToken');
        const message = await this.logout(refreshToken);
        this.$router.push('/login');
      } catch (error) {}
    },
    //?VUEX
    ...mapActions({
      login: 'login',
      fetchUser: 'fetchUser',
      logout: 'logout',
    }),
  },
  computed: {
    ...mapGetters({
      accesToken: 'accesToken',
      refreshToken: 'refreshToken',
      username: 'username',
      rulLevel: 'rulLevel',
      message: 'message',
      authError: 'authError',
    }),
  },
};
</script>

<style lang="scss">
.panel {
  z-index: 99;
}

.right-panel__bell-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  cursor: pointer;
}

.right-panel {
  // .right-panel__name

  &__name {
    padding: 5px 9px;
    transition: all 0.3s ease 0s;

    &._active {
      background: #292b2b;
      box-shadow: 4px 4px 20px rgba(104, 38, 170, 0.38);
      color: #6826aa;
      position: relative;
    }
  }

  // .right-panel__name-list

  &__name-list {
    position: absolute;
    left: 0;
    top: 100%;
    width: 100%;
    transition: all 0.3s ease 0s;
    visibility: hidden;
    opacity: 0;

    &._active {
      visibility: visible;
      opacity: 1;
    }
  }

  // .right-panel__name-item

  &__name-item {
    position: relative;
    background: #292b2b;
    transition: all 0.1s ease 0s;

    &::before {
      content: '';
      position: absolute;
      background: #e9e9e9;
      height: 1px;
      width: 90%;
      left: 5%;
      top: 0;
    }
    padding: 6px 22px 9px 22px;
    color: white;
    cursor: pointer;

    &:hover {
      background: #e9e9e9;
      color: #6826aa;
    }
  }
}

.right-panel {
  position: relative;

  // .right-panel__notes

  &__notes {
    position: absolute;
    right: calc(100% - 31px);
    top: 0;
    width: 180px;
    height: 170px;
    background: #ffffff;
    box-shadow: 4px 4px 20px rgba(23, 25, 25, 0.52);
    border-radius: 2px;
    overflow: auto;
    visibility: hidden;
    opacity: 0;
    transition: all 0.2s ease 0s;

    &._active {
      opacity: 1;
      visibility: visible;
    }
  }

  // .right-panel__note

  &__note {
    width: 100%;
    padding: 7px 7px;
    display: flex;
    transition: all 0.1s ease 0s;

    &._rep {
      .right-panel__note-name {
        &::before {
          content: '';
          background: url('../../../public/img/panel/star1.svg') 0 0 no-repeat;
        }

        &::after {
          content: 'Добавил репетицию';
        }
      }
    }

    &._per {
      .right-panel__note-name {
        &::before {
          content: '';
          background: url('../../../public/img/panel/star2.svg') 0 0 no-repeat;
        }

        &::after {
          content: 'Добавил выступление';
        }
      }
    }

    &:hover {
      background: #d1d1d1;
    }
  }

  // .right-panel__note-img

  &__note-img {
    width: 31px;
    height: 31px;
    overflow: hidden;
    border-radius: 50%;
    margin-right: 3px;
  }

  // .right-panel__note-block

  &__note-block {
    font-weight: 600;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    color: #171919;
  }

  // .right-panel__note-name

  &__note-name {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      right: -3px;
      top: 0px;
      width: 19px;
      height: 19px;
    }

    &::after {
      content: 'Новое сообщение';
      font-weight: 600;
      font-size: 9px;
      line-height: 11px;
      color: #171919;
    }
  }
}
</style>
