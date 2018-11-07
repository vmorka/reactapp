import { GET_MAKES } from '../actions/types'

const initialState = {
  makes: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_MAKES:
      return {
        ...state,
        makes: action.makes
      };
    default:
      return state;
  }
}