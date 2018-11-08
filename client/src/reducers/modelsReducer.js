import { GET_MODELS } from '../actions/types'

const initialState = {
  models: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MODELS:
      return {
        ...state,
        models: action.models
      };
    default:
      return state;
  }
}