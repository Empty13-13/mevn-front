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
                    <source srcset="img/calendar/arrow-left.svg" type="image/webp"/>
                    <img src="img/calendar/arrow-left.svg" alt=""
                  /></picture>
                </div>
                <div class="calendar__name-date">Апрель 2021</div>
                <div href="" class="calendar__arrow-right">
                  <picture>
                    <source srcset="img/calendar/arrow-left.svg" type="image/webp"/>
                    <img src="img/calendar/arrow-left.svg" alt=""
                  /></picture>
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
                <li
                  v-for="day in days_element"
                  :key="day"
                  tag="li"
                  active-class="_active"
                  @click.prevent="console.log(day)"
                ></li>
                <!--<li class="calendar__square _grayed">1</li>
                <li class="calendar__square _grayed">2</li>
                <li class="calendar__square _grayed">3</li>
                <li class="calendar__square">4</li>
                <li class="calendar__square">5</li>
                <li class="calendar__square">6</li>
                <li class="calendar__square">7</li>
                <li class="calendar__square">8</li>
                <li class="calendar__square">9</li>
                <li class="calendar__square">10</li>
                <li class="calendar__square">11</li>
                <li class="calendar__square">12</li>
                <li class="calendar__square">13</li>
                <li class="calendar__square">14</li>
                <li class="calendar__square">15</li>
                <li class="calendar__square">16</li>
                <li class="calendar__square">17</li>
                <li class="calendar__square">18</li>
                <li class="calendar__square">19</li>
                <li class="calendar__square">20</li>
                <li class="calendar__square">21</li>
                <li class="calendar__square">22</li>
                <li class="calendar__square">23</li>
                <li class="calendar__square">24</li>
                <li class="calendar__square _active _rep _per">25</li>
                <li class="calendar__square">26</li>
                <li class="calendar__square _rep _per">27</li>
                <li class="calendar__square">28</li>
                <li class="calendar__square">29</li>
                <li class="calendar__square">30</li>
                <li class="calendar__square">31</li>
                <li class="calendar__square">32</li>
                <li class="calendar__square">33</li>
                <li class="calendar__square">34</li>
                <li class="calendar__square">35</li>
                <li class="calendar__square">36</li>
                <li class="calendar__square">37</li>
                <li class="calendar__square">38</li>
                <li class="calendar__square">39</li>
                <li class="calendar__square">40</li>
                <li class="calendar__square">41</li>
                <li class="calendar__square">42</li>-->
              </ul>
            </div>
          </div>
          <div class="todo__column">
            <div class="listing">
              <div class="listing__up">
                <div class="listing__day">Среда</div>
                <div class="listing__date">15 Апреля 2021</div>
              </div>
              <ul class="listing__list">
                <li class="listing__item _rep">
                  <div class="listing__name">Репетиция</div>
                  <div class="listing__time">14:00 - 18:00</div>
                </li>
                <li class="listing__item _per">
                  <div class="listing__name">Выступление</div>
                  <div class="listing__time">14:00 - 18:00</div>
                </li>
                <li class="listing__item _rep">
                  <div class="listing__name">Репетиция</div>
                  <div class="listing__time">14:00 - 18:00</div>
                </li>
                <li class="listing__item _rep">
                  <div class="listing__name">Репетиция</div>
                  <div class="listing__time">14:00 - 18:00</div>
                </li>
                <li class="listing__item _rep">
                  <div class="listing__name">Репетиция</div>
                  <div class="listing__time">14:00 - 18:00</div>
                </li>
                <li class="listing__item _rep _fav">
                  <div class="listing__name">Репетиция</div>
                  <div class="listing__time">14:00 - 18:00</div>
                </li>
              </ul>
              <div class="listing__bottom">
                <a href="" class="listing__add btn">
                  <picture>
                    <source srcset="img/calendar/add.svg" type="image/webp" />
                    <img src="img/calendar/add.svg" alt="" />
                  </picture>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'main-page',
  data: () => ({
    days_element: null,
  }),
  mounted() {
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

      let selectedDate2 = new Date();
      let selectedDay2 = null;
      let selectedMonth2 = null;
      let selectedYear2 = null;

      mth_element.textContent = `${months[month]} ${year}`;
      NextMonth();
      PrevMonth();

      populateDates();

      next_mth_element.addEventListener('click', goToNextMonth);
      prev_mth_element.addEventListener('click', goToPrevMonth);

      function goToNextMonth(p = true) {
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
          populateDates();
        }
      }

      function goToPrevMonth(p = true) {
        let tempMonth = month - 1;
        let tempYear = year;
        if (tempMonth < 0) {
          tempMonth = 12 + tempMonth;
          tempYear--;
        }
        let tempDate = new Date(tempYear, tempMonth, day);
        if (tempDate < date) {
          return false;
        } else {
          month = tempMonth;
          year = tempYear;
        }
        if (p) {
          mth_element.textContent = months[month] + ' ' + year;
          NextMonth();
          PrevMonth();
          populateDates();
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

      function populateDates() {
        days_element.innerHTML = '';
        let amount_days = 32 - new Date(year, month, 32).getDate();

        let start_day = new Date(year, month, 1).getDay() - 1;

        //Пустые значки
        for (let i = 0; i < start_day; i++) {
          const day_element = document.createElement('div');
          day_element.classList.add('_grayed');
          day_element.classList.add('calendar__square');
          days_element.appendChild(day_element);
        }

        for (let i = start_day; i < start_day; i++) {
          const day_element = document.createElement('div');
          day_element.classList.add('_grayed');
          day_element.classList.add('calendar__square');
          days_element.appendChild(day_element);
        }

        for (let i = 0; i < amount_days; i++) {
          if (grayedDay(i + 1)) {
            const day_element = document.createElement('div');
            day_element.textContent = i + 1;
            day_element.classList.add('_grayed');
            day_element.classList.add('calendar__square');

            days_element.appendChild(day_element);
            continue;
          }

          const day_element = document.createElement('div');
          day_element.classList.add('calendar__square');
          day_element.textContent = i + 1;

          let dateNow = new Date(year, month, i + 1);

          if (selectedDate2 >= dateNow && dateNow >= selectedDate) {
            day_element.classList.add('selecteds');
          }

          if (selectedDay == i + 1 && selectedYear == year && selectedMonth == month) {
            day_element.classList.add('_active');
          }
          if (selectedDay2 == i + 1 && selectedYear2 == year && selectedMonth2 == month) {
            day_element.classList.add('_active');
          }

          day_element.addEventListener('click', function(e) {
            selectedDate = new Date(year + '-' + (month + 1) + '-' + (i + 1));
            selectedDay = i + 1;
            selectedMonth = month;
            selectedYear = year;

            populateDates();
          });

          //days_element.appendChild(day_element);
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
  },
};
</script>
