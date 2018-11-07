import { GET_MAKES } from './types'
import Axios from 'axios';

export const getMakes = () => dispatch => {
  Axios.get('/api/makes/get')
  .then(res => dispatch ({
    type: GET_MAKES,
    makes: res.data
  }))
};