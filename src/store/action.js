import * as actionTypes from './types';
import { v4 as uuid } from 'uuid';
import faker from 'faker';

export const addPerson = () => ({
  type: actionTypes.ADD_PERSON,
  id: uuid(),
  name: faker.name.firstName(),
  age: Math.round(Math.random() * 30),
  image: faker.image.avatar()
});

export const deletePerson = id => ({
  type: actionTypes.DELETE_PERSON,
  id
});
