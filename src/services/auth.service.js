import { request } from './generic.service'

const login = (body) => request({ url: `auth/login`, method: 'post', data: body})

const register = (body) => request({ url: `auth/signup`, method: 'post', data: body})

const refreshToken = (body) => request({ url: `auth/refresh`, method: 'post', data: body})

const logout = (body) => request({ url: `auth/logout`, method: 'post', data: body})

const verify = (body) => request({ url: `auth/verify`, method: 'post', data: body})

const user = (id) => request({ url: `user/${id}`, method: 'get'})

export{
  login, register,refreshToken,logout, verify,user
};

