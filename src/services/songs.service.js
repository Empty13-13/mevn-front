import { request } from './generic.service'

const getSong = (id) => request({ url: `song/${id}`, method: 'get'})

const getSongs = () => request({ url: `song`, method: 'get'})
export{
  getSong, getSongs
};
