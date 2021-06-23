<template>
  <div class="songs__block block-songs">
    <div class="block-songs__body">
      <div class="block-songs__column">
        <div class="block-songs__block1">
          <picture>
            <source srcset="img/songs/list.svg" type="image/webp" />
            <img src="img/songs/list.svg" alt="" />
          </picture>
        </div>
      </div>
      <div class="block-songs__column">
        <div class="block-songs__block2">
          <div class="block-songs__line-block">
            <div class="block-songs__author">{{ author }}</div>
            <div class="block-songs__genres">{{ genre }}</div>
          </div>
          <div class="block-songs__line-block">
            <div class="block-songs__name">{{ title }}</div>
          </div>
        </div>
      </div>
      <div class="block-songs__column">
        <div class="block-songs__block3">
          <picture>
            <source srcset="img/songs/man.webp" type="image/webp"/>
            <img src="img/songs/man.jpg" alt="" class="block-songs__img-main"
          /></picture>

          <div class="block-songs__add-block">
            <a class="block-songs__img">
              <picture>
                <source srcset="img/songs/man.webp" type="image/webp"/>
                <img src="img/songs/man.jpg" alt="" class="block-songs__add-img"
              /></picture>
            </a>
            <a class="block-songs__img">
              <picture>
                <source srcset="img/songs/man.webp" type="image/webp"/>
                <img src="img/songs/man.jpg" alt="" class="block-songs__add-img"
              /></picture>
            </a>
            <a class="block-songs__img">
              <picture>
                <source srcset="img/songs/man.webp" type="image/webp"/>
                <img src="img/songs/man.jpg" alt="" class="block-songs__add-img"
              /></picture>
            </a>
            <a class="block-songs__img">
              <picture>
                <source srcset="img/songs/man.webp" type="image/webp"/>
                <img src="img/songs/man.jpg" alt="" class="block-songs__add-img"
              /></picture>
            </a>
            <a class="block-songs__img">
              <picture>
                <source srcset="img/songs/man.webp" type="image/webp"/>
                <img src="img/songs/man.jpg" alt="" class="block-songs__add-img"
              /></picture>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongBlock',
  props: {
    title: {
      type: String,
      default: '',
    },
    lyrics: {
      type: String,
      default: '',
    },
    genre: {
      type: String,
      default: '',
    },
    author: '',
  },
};
</script>
