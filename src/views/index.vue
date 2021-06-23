<template>
  <div class="todo">
    <div class="todo__content _container">
      <div class="todo__block">
        <div class="todo__body">
          <div class="todo__column">
            <div class="calendar">
              <div class="calendar__up">
                <div href="" class="calendar__arrow-left">
                  <picture>
                    <source srcset="img/calendar/arrow-left.svg" type="image/webp" />
                    <img src="img/calendar/arrow-left.svg" alt="" />
                  </picture>
                </div>
                <div class="calendar__name-date">Апрель 2021</div>
                <div href="" class="calendar__arrow-right">
                  <picture>
                    <source srcset="img/calendar/arrow-left.svg" type="image/webp" />
                    <img src="img/calendar/arrow-left.svg" alt="" />
                  </picture>
                </div>
              </div>
              <ul class="calendar__days">
                <li class="calendar__week-day">ПН</li>
                <li class="calendar__week-day">ВТ</li>
                <li class="calendar__week-day">СР</li>
                <li class="calendar__week-day">ЧТ</li>
                <li class="calendar__week-day">ПТ</li>
                <li class="calendar__week-day">СБ</li>
                <li class="calendar__week-day">ВС</li>
              </ul>
              <ul class="calendar__body">
                //!Календарные дни
              </ul>
            </div>
          </div>
          <div class="todo__column">
            <div class="listing">
              <div class="listing__up">
                <div class="listing__day">Среда</div>
                <div class="listing__date">
                  {{ selectedDay }} {{ months[selectedMonth - 1] }}
                </div>
              </div>
              <a
                @click="changeAll"
                v-if="rulLevel == 'ADMIN'"
                class="music-add-block__rep-per"
                ><span v-if="!isAll">Задачи всех</span>
                <span v-else>Мои задачи</span>
              </a>
              <ul class="listing__list">
                <li
                  class="listing__li"
                  v-for="(item, key) in allEvents"
                  :key="key"
                  :id="item.id"
                  ref="li"
                >
                  <div
                    class="listing__item"
                    @click="editEvent(item.id)"
                    :class="{
                      _per: item.event === 'Выступление',
                      _my: item.event != 'Выступление' && item.event != 'Репетиция',
                    }"
                  >
                    <div class="listing__item-body">
                      <div class="listing__name">{{ item.event }}</div>
                      <div class="listing__time">{{ item.title }}</div>
                    </div>
                  </div>
                  <div
                    class="listing__delete-btn"
                    @click.prevent="deleteItem(item.id, item.event)"
                  >
                    X
                    <span></span>
                    <span></span>
                  </div>
                </li>
              </ul>
              <div class="listing__bottom">
                <a href="" class="listing__add btn" @click.prevent="openMusicAddBlock">
                  <picture>
                    <source srcset="img/calendar/add.svg" type="image/webp" />
                    <img src="img/calendar/add.svg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div
          class="music-add-block"
          v-show="isAddBlock"
          v-on:keyup.enter="addHandler"
          v-on:keyup.esc="loadDay(selectedDay, selectedMonth, selectedYear)"
        >
          <img
            src="../../public/img/calendar/close.svg"
            alt=""
            class="music-add-block__close-btn btn"
            @click="isAddBlock = !isAddBlock"
          />
          <div class="music-add-block__lesson-name">Занятие</div>
          <input
            autocomplete="off"
            type="text"
            name="form[]"
            placeholder="Напиши свое занятие"
            class="music-add-block__lesson-input input"
            v-model="less"
            :class="{
              _invalid:
                ($v.less.$dirty && !$v.less.required) ||
                ($v.less.$dirty && !$v.less.minLength),
            }"
            ref="add_input"
            v-if="(picked == 'Моя задача' && isAll) || !isAll"
          />
          <div class="music-add-block__options" v-if="isAll">
            <div class="music-add-block__check" id="wrap3">
              <input
                type="radio"
                name="problem"
                value="Репетиция"
                id="choose1"
                v-model.trim="picked"
              />
              <label for="choose1"> Репетиция</label>
            </div>
            <div class="music-add-block__check" id="wrap3">
              <input
                type="radio"
                name="problem"
                value="Выступление"
                id="choose2"
                v-model.trim="picked"
              />
              <label for="choose2"> Выступление</label>
            </div>
            <div class="music-add-block__check" id="wrap3">
              <input
                type="radio"
                name="problem"
                value="Моя задача"
                id="choose3"
                v-model.trim="picked"
              />
              <label for="choose3"> Моя задача</label>
            </div>
          </div>
          <div class="music-add-block__time-te">Время</div>
          <div class="music-add-block__block-times">
            <div class="music-add-block__times">
              <div class="music-add-block__time-block">
                <input
                  autocomplete="off"
                  type="text"
                  name="form[]"
                  class="music-add-block__time input"
                  @keypress="isNumber($event)"
                  ref="time1"
                  v-model.trim="time1"
                  :class="{
                    _invalid:
                      ($v.time1.$dirty && !$v.time1.maxLength) ||
                      ($v.time1.$dirty && !$v.time1.required) ||
                      ($v.time1.$dirty && notNormalTime()),
                  }"
                  maxlength="2"
                />
                <input
                  autocomplete="off"
                  type="text"
                  name="form[]"
                  class="music-add-block__time input"
                  ref="time2"
                  v-model.trim="time2"
                  :class="{
                    _invalid:
                      ($v.time2.$dirty && !$v.time2.required) ||
                      ($v.time2.$dirty && !$v.time2.maxLength) ||
                      ($v.time1.$dirty && notNormalTime()),
                  }"
                  maxlength="2"
                />
              </div>
              <div class="music-add-block__time-block">
                <input
                  autocomplete="off"
                  type="text"
                  name="form[]"
                  class="music-add-block__time input"
                  @keypress="isNumber($event)"
                  ref="time3"
                  v-model.trim="time3"
                  :class="{
                    _invalid:
                      ($v.time3.$dirty && !$v.time3.maxLength) ||
                      ($v.time3.$dirty && !$v.time3.required) ||
                      ($v.time4.$dirty && time4 == time2 && time3 == time1) ||
                      ($v.time1.$dirty && notNormalTime()),
                  }"
                  maxlength="2"
                />
                <input
                  autocomplete="off"
                  type="text"
                  name="form[]"
                  class="music-add-block__time input"
                  ref="time4"
                  v-model.trim="time4"
                  :class="{
                    _invalid:
                      ($v.time4.$dirty && !$v.time4.maxLength) ||
                      ($v.time4.$dirty && !$v.time4.required) ||
                      ($v.time4.$dirty && time4 == time2 && time3 == time1) ||
                      ($v.time1.$dirty && notNormalTime()),
                  }"
                  maxlength="2"
                />
              </div>
            </div>
            <small class="small-text-error" v-if="$v.time1.$dirty && notNormalTime() == 1"
              >Окончание должно быть позже начала
            </small>
            <small
              class="small-text-error"
              v-if="$v.time1.$dirty && notNormalTime() == 2"
            >
              Это время уже занято
            </small>
          </div>
          <a @click.prevent="addHandler" class="music-add-block__btn-add btn">
            Добавить
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { required, minLength, maxLength } from 'vuelidate/lib/validators';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'main-page',
  data: () => ({
    days_element: null,
    isAddBlock: false,
    less: '',
    repetitions: [],
    concerts: [],
    eventDays: [],
    allEvents: [],
    allEventsTime: [],
    time1: '',
    time2: '',
    time3: '',
    time4: '',
    isCreate: true,
    months: [
      'Января',
      'Февраля',
      'Марта',
      'Апреля',
      'Мая',
      'Июня',
      'Июля',
      'Авгуса',
      'Сентября',
      'Октября',
      'Ноября',
      'Декабря',
    ],
    isAll: false,
    picked: null,
  }),
  async mounted() {
    let now = new Date();
    await this.loadDay(now.getDate(), now.getMonth() + 1, now.getFullYear());
    //await this.loadDay(10, 6, 2021);

    //!Выбор времени(инпуты) в "добавить задачу"
    let times = document.querySelectorAll('.music-add-block__time');
    times[0].value = new Date().getHours();
    times[2].value = new Date().getHours();

    //!Календарь
    {
      let mth_element = document.querySelector('.calendar__name-date');
      let next_mth_element = document.querySelector('.calendar__arrow-right');
      let prev_mth_element = document.querySelector('.calendar__arrow-left');
      //let days_element = document.querySelector('.calendar__body');
      this.days_element = document.querySelector('.calendar__body');

      let days_element = this.days_element;

      {
        const months = [
          'Январь',
          'Февраль',
          'Март',
          'Апрель',
          'Май',
          'Июнь',
          'Июль',
          'Август',
          'Сентябрь',
          'Октябрь',
          'Ноябрь',
          'Декабрь',
        ];

        let date = new Date();
        date = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 0, 0, 0, 0);
        const day = date.getDate();
        let month = date.getMonth();
        let year = date.getFullYear();
        let selectedDate = new Date();
        let selectedDay = day;
        let selectedMonth = month;
        let selectedYear = year;

        mth_element.textContent = `${months[month]} ${year}`;
        NextMonth();
        PrevMonth();

        populateDates(this.loadDay);

        next_mth_element.addEventListener('click', {
          handleEvent: goToNextMonth,
          loadDay: this.loadDay,
        });
        prev_mth_element.addEventListener('click', {
          handleEvent: goToPrevMonth,
          loadDay: this.loadDay,
        });

        function goToNextMonth(ev, p = true) {
          let tempMonth = month + 1;
          let tempYear = year;
          if (tempMonth > 11) {
            tempMonth = 0 - (12 - tempMonth);
            tempYear++;
          }
          let tempDate = new Date(tempYear - 1, tempMonth, day);
          if (tempDate > date) {
            return false;
          } else {
            month = tempMonth;
            year = tempYear;
          }
          if (p) {
            mth_element.textContent = months[month] + ' ' + year;
            NextMonth();
            PrevMonth();
            populateDates(this.loadDay);
          }
        }

        function goToPrevMonth(ev, p = true) {
          let tempMonth = month - 1;
          let tempYear = year;
          if (tempMonth < 0) {
            tempMonth = 12 + tempMonth;
            tempYear--;
          }
          let tempDate = new Date(tempYear, tempMonth, day);
          month = tempMonth;
          year = tempYear;
          if (p) {
            mth_element.textContent = months[month] + ' ' + year;
            NextMonth();
            PrevMonth();
            populateDates(this.loadDay);
          }
        }

        function NextMonth() {
          month++;
          if (month > 11) {
            month = 0;
            year++;
          }
        }

        function PrevMonth() {
          month--;
          if (month < 0) {
            month = 11;
            year--;
          }
        }

        function populateDates(loadDay) {
          days_element.innerHTML = '';
          let amount_days = 32 - new Date(year, month, 32).getDate();

          let start_day = new Date(year, month, 1).getDay() - 1;

          //Пустые значки
          for (let i = 0; i < start_day; i++) {
            const day_element = document.createElement('div');
            day_element.classList.add('_empty');
            day_element.classList.add('calendar__square');
            days_element.appendChild(day_element);
          }

          //for (let i = start_day; i < start_day; i++) {
          //  const day_element = document.createElement('div');
          //  day_element.classList.add('_grayed');
          //  day_element.classList.add('calendar__square');
          //  days_element.appendChild(day_element);
          //}

          for (let i = 0; i < amount_days; i++) {
            if (grayedDay(i + 1)) {
              const day_element = document.createElement('div');
              day_element.textContent = i + 1;
              day_element.classList.add('_grayed');
              day_element.classList.add('calendar__square');

              day_element.addEventListener('click', async function() {
                selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
                selectedDay = (await i) + 1;
                selectedMonth = await month;
                selectedYear = await year;
                populateDates(loadDay);

                await loadDay(selectedDay, selectedMonth + 1, selectedYear);
              });

              days_element.appendChild(day_element);

              if (
                selectedDay == i + 1 &&
                selectedYear == year &&
                selectedMonth == month
              ) {
                console.log(selectedDay, selectedMonth, selectedYear);
                day_element.classList.add('_active');
              }
              continue;
            }

            const day_element = document.createElement('div');
            day_element.classList.add('calendar__square');
            day_element.textContent = i + 1;

            if (selectedDay == i + 1 && selectedYear == year && selectedMonth == month) {
              console.log(selectedDay, selectedMonth, selectedYear);
              day_element.classList.add('_active');
            }

            day_element.addEventListener('click', async function() {
              selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
              selectedDay = (await i) + 1;
              selectedMonth = await month;
              selectedYear = await year;
              populateDates(loadDay);

              await loadDay(selectedDay, selectedMonth + 1, selectedYear);
            });

            days_element.appendChild(day_element);
          }
        }

        function grayedDay(i) {
          const tempDate1 = new Date(year, month, i);
          const tempDate2 = new Date(
            date.getFullYear() + 1,
            date.getMonth(),
            date.getDate()
          );
          return tempDate1 < date || tempDate1 > tempDate2;
        }
      }
    }
  },
  validations() {
    if ((this.picked == 'Моя задача' && this.isAll) || !this.isAll) {
      return {
        less: { required, minLength: minLength(3) },
        time1: { required, maxLength: maxLength(3) },
        time2: { required, maxLength: maxLength(3) },
        time3: { required, maxLength: maxLength(3) },
        time4: { required, maxLength: maxLength(3) },
      };
    } else if (this.isAll) {
      return {
        picked: { required },
        time1: { required, maxLength: maxLength(3) },
        time2: { required, maxLength: maxLength(3) },
        time3: { required, maxLength: maxLength(3) },
        time4: { required, maxLength: maxLength(3) },
      };
    } else {
      return {
        less: { required, minLength: minLength(3) },
        time1: { required, maxLength: maxLength(3) },
        time2: { required, maxLength: maxLength(3) },
        time3: { required, maxLength: maxLength(3) },
        time4: { required, maxLength: maxLength(3) },
      };
    }
  },
  methods: {
    async addHandler(create = this.isCreate) {
      if (this.$v.$invalid || this.notNormalTime()) {
        this.$v.$touch();
        return;
      }

      this.isAddBlock = false;
      let newEvent = this.calendar ? false : true;
      let bodyObj = {};

      if (create) {
        let dateNow = formatDate(this.selectedDay, this.selectedMonth, this.selectedYear);
        let eventObj = {
          title: `${this.$refs['time1'].value}:${this.$refs['time2'].value}-${this.$refs['time3'].value}:${this.$refs['time4'].value}`,
          text: this.$refs['add_input']?.value || '',
          user: this.id,
        };
        let repetition = this.calendar.repetition || [];
        let concert = this.calendar.concert || [];
        let eventDay = this.calendar.eventDay || [];

        if ((this.picked != 'Репетиция' && this.picked != 'Выступление') || !this.isAll) {
          await this.createEventDay(eventObj);
          eventDay.push(this.eventDay._id);

          bodyObj = {
            title: dateNow,
            eventDay: eventDay,
          };
        }
        if (this.picked == 'Репетиция' && this.isAll) {
          await this.createRepetition(eventObj);
          repetition.push(this.repetition._id);

          bodyObj = {
            title: dateNow,
            repetition: repetition,
          };
        } else if ((this.picked = 'Выступление' && this.isAll)) {
          await this.createConсert(eventObj);
          concert.push(this.concert._id);

          bodyObj = {
            title: dateNow,
            concert: concert,
          };
        }
      }

      if (newEvent) {
        await this.createCalendar(bodyObj);
      } else {
        await this.editCalendar({ body: bodyObj, id: this.calendar._id });
      }

      this.loadDay(this.selectedDay, this.selectedMonth, this.selectedYear);

      function formatDate(day, month, year) {
        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        return `${day}-${month}-${year}`;
      }
    },
    isNumber: function(evt) {
      evt = evt ? evt : window.event;
      var charCode = evt.which ? evt.which : evt.keyCode;
      if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode !== 46) {
        evt.preventDefault();
      } else {
        return true;
      }
    },
    async loadDay(day, month, year) {
      this.isAddBlock = false;
      await this.fetchCalendarByTitle(formatDate(day, month, year));
      await this.fetchSelectedDate({ day: day, month: month, year: year });

      await this.loadEvent();
      //Вспомогательные штуки
      function formatDate(day, month, year) {
        if (day < 10) day = '0' + day;
        if (month < 10) month = '0' + month;
        return `${day}-${month}-${year}`;
      }
    },
    async loadEvent() {
      this.allEvents = [];
      this.allEventsTime = [];

      if (!this.calendar) {
        return;
      }

      this.repetitions = [];
      this.concerts = [];
      this.eventDays = [];

      //?Репетиции
      for (let i = 0; i < this.calendar.repetition.length; i++) {
        await this.fetchRepetition(this.calendar.repetition[i]);
        this.repetitions.push({
          title: this.repetition.title,
          event: 'Репетиция',
          id: this.repetition._id,
        });
      }
      //?Выступления
      for (let i = 0; i < this.calendar.concert.length; i++) {
        await this.fetchConcert(this.calendar.concert[i]);
        this.concerts.push({
          title: this.concert.title,
          event: 'Выступление',
          id: this.concert._id,
        });
      }
      //?Дела
      for (let i = 0; i < this.calendar.eventDay.length; i++) {
        await this.fetchEventDay(this.calendar.eventDay[i]);
        if (!this.isAll) {
          if (this.id == this.eventDay.user) {
            this.eventDays.push({
              title: this.eventDay.title,
              event: this.eventDay.text,
              id: this.eventDay._id,
            });
          }
        } else {
          this.eventDays.push({
            title: this.eventDay.title,
            event: this.eventDay.text,
            id: this.eventDay._id,
          });
        }
      }

      this.allEvents = await this.concerts.concat(this.eventDays, this.repetitions);
      this.allEvents.sort((a, b) => a.title[1] - b.title[1]);

      this.allEvents.forEach(element => {
        let time = element.title.split('-');
        this.allEventsTime.push({
          time1: new Date().setHours(+time[0].split(':')[0], +time[0].split(':')[1]),
          time2: new Date().setHours(+time[1].split(':')[0], +time[1].split(':')[1]),
          id: element.id,
        });
      });
    },
    openMusicAddBlock() {
      this.isAddBlock = !this.isAddBlock;
      this.$nextTick(() => {
        this.$refs['add_input']?.focus();
      });
    },
    notNormalTime() {
      let time1 = new Date().setHours(+this.time1, +this.time2),
        time2 = new Date().setHours(+this.time3, +this.time4);
      if (time2 < time1) {
        return 1;
      }
      for (let i = 0; i < this.allEventsTime.length; i++) {
        let element = this.allEventsTime[i];
        if (
          (element.time1 < time2 && time2 < element.time2) ||
          (element.time1 < time1 && time1 < element.time2) ||
          (element.time1 > time1 && element.time2 < time2) ||
          (element.time1 < time1 && element.time2 > time2)
        ) {
          return 2;
        }
      }
      return false;
    },
    async deleteItem(id, event) {
      this.isAddBlock = false;
      //Удаляем элемент из видимого массива
      this.allEvents = this.allEvents.filter(n => {
        return n.id != id;
      });

      //Обработка БД

      if (event == 'Репетиция') {
        this.calendar.repetition = await this.calendar.repetition.filter(n => {
          return n != id;
        });

        let resultObj = { repetition: this.calendar.repetition };
        await this.deleteConсert({ id, idCal: this.calendar._id, body: resultObj });
      } else if ((event = 'Выступление')) {
        this.calendar.concert = await this.calendar.concert.filter(n => {
          return n != id;
        });

        let resultObj = { concert: this.calendar.concert };
        await this.deleteConсert({ id, idCal: this.calendar._id, body: resultObj });
      } else {
        this.calendar.eventDay = await this.calendar.eventDay.filter(n => {
          return n != id;
        });

        let resultObj = { eventDay: this.calendar.eventDay };
        await this.deleteEventDay({ id, idCal: this.calendar._id, body: resultObj });
      }
    },
    async editEvent(id) {
      this.isAddBlock = true;
      this.isCreate = false;
      let event = [];
      //Выбираем элемент
      for (let i = 0; i < this.eventDays.length; i++) {
        let element = this.eventDays[i];
        if (element.id == id) {
          event = element;
          break;
        }
      }
      //Очищаем от фильтра
      this.allEventsTime = await this.calendar.eventDay.filter(n => {
        return n.id != id;
      });

      let time = event.title,
        time11 = time.split('-')[0],
        time22 = time.split('-')[0];
      this.time1 = time11.split(':')[0];
      this.time2 = time11.split(':')[1];
      this.time3 = time22.split(':')[0];
      this.time4 = time22.split(':')[1];
    },
    formatTime(time) {
      let time11 = time.split('-')[0],
        time22 = time.split('-')[0],
        time1 = time11.split(':')[0],
        time2 = time11.split(':')[1],
        time3 = time22.split(':')[0],
        time4 = time22.split(':')[1];
      return { time1, time2, time3, time4 };
    },
    changeAll() {
      this.isAll = !this.isAll;
      this.loadEvent();
    },
    lol() {
      console.log('lol');
    },
    //?Vuex
    ...mapActions({
      fetchCalendarByTitle: 'fetchCalendarByTitle',
      fetchConcert: 'fetchConcert',
      fetchEventDay: 'fetchEventDay',
      fetchRepetition: 'fetchRepetition',
      fetchSelectedDate: 'fetchSelectedDate',
      createEventDay: 'createEventDay',
      createRepetition: 'createRepetition',
      createConсert: 'createConсert',
      createCalendar: 'createCalendar',
      editCalendar: 'editCalendar',
      editConсert: 'editConсert',
      editCalendar: 'editCalendar',
      deleteEventDay: 'deleteEventDay',
      deleteConсert: 'deleteConсert',
      deleteRepetition: 'deleteRepetition',
    }),
  },
  computed: {
    ...mapGetters({
      calendar: 'calendar',
      repetition: 'repetition',
      concert: 'concert',
      eventDay: 'eventDay',
      selectedDay: 'selectedDay',
      selectedMonth: 'selectedMonth',
      selectedYear: 'selectedYear',
      rulLevel: 'rulLevel',
      id: 'id',
    }),
  },
};
</script>

<style lang="scss">
.input {
  &._invalid {
    border-bottom: 1px solid red;
  }
}

.todo__block {
  position: relative;
}

.music-add-block {
  position: absolute;
  left: 50%;
  top: 50%;
  background: #ffffff;
  box-shadow: 4px 4px 20px rgba(23, 25, 25, 0.59);
  transform: translate(-50%, -50%);
  z-index: 99;
  padding: 40px 40px 28px 20px;
  width: 400px;

  &__rep-per {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #ffffff;
    padding: 7px 27px;
    background: #6826aa;
    display: block;
    max-width: 230px;
    margin: 15px auto;
    cursor: pointer;
    transition: all 0.2s ease 0s;

    &:hover {
      background: #3a155f;
    }
  }

  &__close-btn {
    position: absolute;
    right: 2px;
    top: 0px;
    cursor: pointer;
    padding: 10px;
  }

  // .music-add-block__lesson-name

  &__lesson-name {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #171919;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      background: #6826aa;
      height: 2px;
      bottom: 0px;
      left: 0;
      width: 20px;
    }
    margin-bottom: 8px;
  }

  // .music-add-block__lesson-input

  &__lesson-input {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #171919;
    padding: 10px 10px;
    background: #dedede;
    margin-bottom: 5px;
  }

  // .music-add-block__time-te

  &__time-te {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #171919;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      background: #6826aa;
      height: 2px;
      bottom: 0px;
      left: 0;
      width: 20px;
    }
    margin-bottom: 8px;
  }

  // .music-add-block__options

  &__options {
    margin: 15px;
    display: flex;
    flex-direction: column;
  }

  // .music-add-block__check

  &__check {
    display: inline-block;
    margin: 0px 0px 0px 5px;
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #ffffff;
    padding: 7px 27px;
    background: #6826aa;
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
    label {
      cursor: pointer;
    }
  }

  // .music-add-block__times

  &__times {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  &__block-times {
    margin-bottom: 23px;
    text-align: center;
  }

  // .music-add-block__time-block

  &__time-block {
    display: flex;
  }

  // .music-add-block__time

  &__time {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #171919;
    background: #dedede;
    margin-bottom: 5px;
    width: 60px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 3px;

    &:last-child {
      margin-right: 0;
    }
  }

  // .music-add-block__btn-add

  &__btn-add {
    font-family: Fira Sans;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    letter-spacing: 0.02em;
    color: #ffffff;
    padding: 7px 27px;
    background: #6826aa;
    margin-left: 50%;
    transform: translateX(-50%);
    cursor: pointer;
  }
}

.small-text-error {
  color: red;
  font-family: Fira Sans;
  font-style: normal;
  font-weight: 500;
  letter-spacing: 0.02em;
}

.listing {
  &__delete-btn {
    padding: 15px;
    z-index: 98;
    height: 100%;
    &:hover {
      background: rgb(139, 139, 139);
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__li {
    display: flex;
    width: 100%;
  }
  &__item-body {
    width: 100%;
  }
  &__item {
    width: 100%;
  }
}
</style>
