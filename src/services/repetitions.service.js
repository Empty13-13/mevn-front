import { request } from './generic.service'

const getRepetition = (id) => request({ url: `repetition/${id}`, method: 'get'})

const getRepetitions = () => request({ url: `repetition`, method: 'get'})

const createRepetitions = (body) => request({ url: `repetition`, method: 'post', data: body})

const editRepetition = ({body, id}) => request({ url: `repetition/${id}`, method: 'put', data: body})

const deleteRepetition = (id) => request({ url: `repetition/${id}`, method: 'delete'})

export{
  getRepetition, getRepetitions, createRepetitions, editRepetition, deleteRepetition
};
