import { CHANGE_TEXT } from '../actions/types';

let initialState = {
  text: ''
}

export default function(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    default:
      return state;
  }
}