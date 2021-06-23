import axios from "./request.service";

export default class GenericService {
  constructor({url, name}){
    this.url = url
    this.name = name
  }

  async fetchAll(){
    try {
      const {data} = await axios.get(`${this.url}/`)
      return data
    } catch (error) {
      throw{
        error,
        error: true,
        message: `${this.name} on fetch all something wrong`
      }
    }
  }
  async fetchOne(id){
    try {
      const {data} = await axios.get(`${this.url}/${id}`)
      return data
    } catch (error) {
      throw{
        error,
        error: true,
        message: `${this.name} on fetch one something wrong`
      }
    }
  }
  async create(payload){
    try {
      const {data} = await request.post(`${this.create}/`,payload)
      return data
    } catch (error) {
      throw{
        error,
        error: true,
        message: `${this.name} with create request something wrong`
      }
    }
  }
  async update(id, payload){
    try {
      const {data} = await axios.put(`${this.url}/${id}`,payload)
      return data
    } catch (error) {
      throw{
        error,
        error: true,
        message: `${this.name} with update request something wrong`
      }
    }
  }
  async delete(id){
    try {
      await axios.delete(`${this.url}/${id}`)
    } catch (error) {
      throw{
        error,
        error: true,
        message: `${this.name} with delete request something wrong`
      }
    }
  }
}
