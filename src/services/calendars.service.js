import { request } from './generic.service'

const getCalendar = (id) => request({ url: `calendar/${id}`, method: 'get'})

const getCalendars = () => request({ url: `calendar`, method: 'get'})

const getCalendarByTitle = (title) => request({ url: `calendar/title/${title}`, method: 'get'})

const createCalendar = (body) => request({ url: `calendar/`, method: 'post', data: body})

const editCalendar = ({body, id}) => request({ url: `calendar/${id}`, method: 'put', data: body})

const deleteCalendar = (id) => request({ url: `calendar/${id}`, method: 'delete'})

export{
  getCalendar, getCalendars, getCalendarByTitle, createCalendar, editCalendar,deleteCalendar
};

