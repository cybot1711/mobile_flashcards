import { ADD_CARD, ADD_DECK } from './types';

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