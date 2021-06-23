import { request } from './generic.service'

const getEventDay = (id) => request({ url: `eventDay/${id}`, method: 'get'})

const getEventDays = () => request({ url: `eventDay`, method: 'get'})

const createEventDays = (body) => request({ url: `eventDay`, method: 'post', data: body})

const editEventDay = ({body, id}) => request({ url: `eventDay/${id}`, method: 'put', data: body})

const deleteEventDay = (id) => request({ url: `eventDay/${id}`, method: 'delete'})

export{
  getEventDay, getEventDays, createEventDays,editEventDay,deleteEventDay
};
