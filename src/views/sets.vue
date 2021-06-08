<template>
  <div class="sets">
    <div class="sets__content _container">
      <div class="func-menu">
        <div class="func-menu__line">
          <h3 class="func-menu__name">Сет-листы</h3>
        </div>
        <div class="func-menu__line">
          <div class="func-menu__filters">
            <ul class="func-menu__list-menu">
              <li class="func-menu__item-menu">
                <a href="" class="func-menu__href-menu">Все</a>
              </li>
              <FuncMenuItem
                v-for="(place, key) in places"
                :key="key"
                :title="place.title"
              />
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
      <div class="sets__body">
        <div class="sets__block block-sets">
          <div class="block-sets__body">
            <div class="block-sets__column">
              <picture>
                <source srcset="img/sets/sets.svg" type="image/webp" />
                <img src="img/sets/sets.svg" alt="" />
              </picture>
            </div>
            <div class="block-sets__column">
              <div class="block-sets__block1">
                <div class="block-sets__name">Сет-лист №1</div>
                <a class="block-sets__tag"><span>Харди-бар</span></a>
              </div>
            </div>
            <div class="block-sets__column">
              <div class="block-sets__block2">
                <div class="block-sets__num-song">15</div>
                <div class="block-sets__text-num-song">Количество песен в сет-листе</div>
              </div>
            </div>
            <div class="block-sets__column">
              <div class="block-sets__block3">
                <div class="block-sets__average">Среднее время игры</div>
                <div class="block-sets__text-average">1 час 30 минут</div>
              </div>
            </div>
            <div class="block-sets__column">
              <div class="block-sets__block4">
                <div class="block-sets__num-frequency">50</div>
                <div class="block-sets__text-frequenct">
                  Частота использования сет-листа
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="sets__block block-sets">
          <div class="block-sets__body">
            <div class="block-sets__column">
              <picture>
                <source srcset="img/sets/sets.svg" type="image/webp" />
                <img src="img/sets/sets.svg" alt="" />
              </picture>
            </div>
            <div class="block-sets__column">
              <div class="block-sets__block1">
                <div class="block-sets__name">Сет-лист №1</div>
                <a class="block-sets__tag"><span>Харди-бар</span></a>
              </div>
            </div>
            <div class="block-sets__column">
              <div class="block-sets__block2">
                <div class="block-sets__num-song">15</div>
                <div class="block-sets__text-num-song">Количество песен в сет-листе</div>
              </div>
            </div>
            <div class="block-sets__column">
              <div class="block-sets__block3">
                <div class="block-sets__average">Среднее время игры</div>
                <div class="block-sets__text-average">1 час 30 минут</div>
              </div>
            </div>
            <div class="block-sets__column">
              <div class="block-sets__block4">
                <div class="block-sets__num-frequency">50</div>
                <div class="block-sets__text-frequenct">
                  Частота использования сет-листа
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import FuncMenuItem from '@/components/app/FuncMenuItem.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'Sets',
  components: {
    FuncMenuItem,
  },
  mounted() {
    this.fetchPlaces();
  },
  computed: {
    ...mapGetters({
      places: 'places',
    }),
  },
  methods: {
    ...mapActions({
      fetchPlaces: 'fetchPlaces',
    }),
  },
};
</script>
