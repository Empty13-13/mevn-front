import { request } from './generic.service'

const getUser = (id) => request({ url: `user/${id}`, method: 'get'})

const getUsers = () => request({ url: `user`, method: 'get'})
export{
  getUser, getUsers
};
