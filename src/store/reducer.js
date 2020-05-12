import * as actionTypes from './types';
import produce from 'immer';

let initialState = {
  persons: []
};

export const personReducer = (state = initialState, action) => {
  const { type, id, name, age } = action;
  switch (type) {
    case actionTypes.ADD_PERSON:
      return produce(state, draftState => {
        draftState.persons.push({
          id,
          name,
          age
        });
      });

    case actionTypes.DELETE_PERSON:
      return {
        ...state,
        persons: state.persons.filter(person => person.id !== id)
      };
    default:
      return state;
  }
};
