import { ADD_CARD, ADD_DECK } from '../actions'
import data from '../utils/defaultData';

initialState = data;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_DECK :
      return [
        ...state,
        action.payload
      ];
    case ADD_CARD :
      return state.map(item => {
        if(item.title === action.title) {
          return {
            ...item,
            questions: [...item.questions, action.payload]
          }
        }
        return item
      });
    default:
      return state;
  }
};

export default reducer;