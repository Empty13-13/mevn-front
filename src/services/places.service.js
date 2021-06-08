import { request } from './generic.service'

const getPlace = (id) => request({ url: `place/${id}`, method: 'get'})

const getPlaces = () => request({ url: `place`, method: 'get'})
export{
  getPlace, getPlaces
};
