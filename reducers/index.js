import {ADD_CARD, ADD_DECK } from '../actions'
import data from '../utils/defaultData';

initialState = data;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK :
      return [
        ...state,
        action.payload
      ];
    default:
      return state;
  }
};

export default reducer;