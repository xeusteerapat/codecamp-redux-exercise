import * as actionTypes from './types';

export const addPerson = () => ({
  type: actionTypes.ADD_PERSON,
  id: Math.random(),
  name: 'Max',
  age: Math.round(Math.random() * 30)
});

export const deletePerson = id => ({
  type: actionTypes.DELETE_PERSON,
  id
});
