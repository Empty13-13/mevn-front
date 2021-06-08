<template>
  <header class="header">
    <div class="header__menu menu">
      <div
        class="menu__icon icon-menu"
        :class="{ _active: !isOpen }"
        @click.prevent="isOpen = !isOpen"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <nav class="menu__body" :class="{ _active: !isOpen }">
        <router-link to="/" class="menu__logo">
          <picture>
            <source srcset="img/header/logo.svg" type="image/webp"/>
            <img src="img/header/logo.svg" alt=""
          /></picture>
        </router-link>
        <ul class="menu__list">
          <router-link
            v-for="link in links"
            :key="link.title"
            tag="li"
            active-class="_active"
            :to="link.url"
            :exact="link.exact"
          >
            <a href="" class="menu__link">{{ link.title }}</a>
          </router-link>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  data: () => ({
    links: [
      { title: 'Главная', url: '/', exact: true },
      { title: 'Сет-листы', url: '/sets' },
      { title: 'Песни', url: '/songs' },
      { title: 'Чат', url: '/chat' },
      { title: 'Доходы/расходы', url: '' },
      { title: 'Настройки', url: '' },
    ],
    isOpen: true,
  }),
};
</script>
