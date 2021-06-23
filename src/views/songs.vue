<template>
  <div class="songs">
    <div class="songs__content _container">
      <div class="func-menu">
        <div class="func-menu__line">
          <h3 class="func-menu__name">Песни</h3>
        </div>
        <div class="func-menu__line">
          <div class="func-menu__filters">
            <ul class="func-menu__list-menu">
              <li class="func-menu__item-menu">
                <a href="" class="func-menu__href-menu">Все</a>
              </li>
              <!--<li class="func-menu__item-menu">
                <a href="" class="func-menu__href-menu _active">Харди-бар(2)</a>
              </li>
              <li class="func-menu__item-menu">
                <a href="" class="func-menu__href-menu">Хератс-бар(3)</a>
              </li>-->
            </ul>
          </div>
          <a href="" class="func-menu__add btn">
            <picture>
              <source srcset="img/func-menu/add.svg" type="image/webp" />
              <img src="img/func-menu/add.svg" alt="" /> </picture
            ><span>Создать сет</span>
          </a>
        </div>
      </div>
      <div class="songs__blocks">
        <Song
          v-for="(song, key) in songs"
          :key="key"
          :title="song.title"
          :lyrics="song.lyrics"
          :genre="findGenre(song.genre[0])"
        />

        <!--<div class="songs__block block-songs">
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
                  <div class="block-songs__author">Звери</div>
                  <div class="block-songs__genres">Блюз, Джаз, Рок</div>
                </div>
                <div class="block-songs__line-block">
                  <div class="block-songs__name">Районы-кварталы</div>
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
        </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import Song from '@/views/song.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  components: {
    Song,
  },
  async mounted() {
    await this.fetchSongs();
    await this
  },
  computed: {
    ...mapGetters({
      songs: 'songs',
      genre: 'genre',
    }),
  },
  methods: {
    async findGenre(id) {
      await this.fetchGenre(id);
      return this.genre.title;
    },

    //?VUEX
    ...mapActions({
      fetchSongs: 'fetchSongs',
      fetchGenre: 'fetchGenre',
      fetchGenres: 'fetchGenres',
    }),
  },
};
</script>
