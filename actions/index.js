export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';

export const addDeck = (item) => ({
  type: ADD_DECK,
  payload: {
    title: item,
    questions: []
  }
});

export const addCard = (item, title) => ({
  type: ADD_CARD,
  payload: item,
  title: title,
});