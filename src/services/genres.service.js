import { request } from './generic.service'

const getGenre = (id) => request({ url: `genre/${id}`, method: 'get'})

const getGenres = () => request({ url: `genre`, method: 'get'})
export{
  getGenre, getGenres
};
