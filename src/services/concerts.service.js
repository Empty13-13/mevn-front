import { request } from './generic.service'

const getConcert = (id) => request({ url: `concert/${id}`, method: 'get'})

const getConcerts = () => request({ url: `concert`, method: 'get'})

const createConсerts = (body) => request({ url: `concert`, method: 'post', data: body})

const editConсert = ({body, id}) => request({ url: `concert/${id}`, method: 'put', data: body})

const deleteConсert = (id) => request({ url: `concert/${id}`, method: 'delete'})

export{
  getConcert, getConcerts,createConсerts,editConсert,deleteConсert
};
