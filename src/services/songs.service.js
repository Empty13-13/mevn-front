import { request } from './generic.service'

const getSong = (id) => request({ url: `songs/${id}`, method: 'get'})

const getSongs = () => request({ url: `songs`, method: 'get'})
export{
  getSong, getSongs
};
