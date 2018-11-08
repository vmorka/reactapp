import { GET_MODELS } from './types'
import Axios from 'axios'

export const getModels = (makeid) => dispatch => {
  Axios.get(`/api/models/get/${makeid}`)
  .then(res => dispatch ({
    type: GET_MODELS,
    models: res.data
  }))
};