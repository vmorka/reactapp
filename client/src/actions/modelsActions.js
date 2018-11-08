import { GET_MODELS } from './types'
import Axios from 'axios'

export const getModels = (id) => dispatch => {
  Axios.get(`/api/models/get/${id}`)
  .then(res => dispatch ({
    type: GET_MODELS,
    models: res.data
  }))
};