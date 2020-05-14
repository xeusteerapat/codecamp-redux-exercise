import * as actionTypes from './types';
import { v4 as uuid } from 'uuid';
import faker from 'faker';

export const addPerson = (name, age) => ({
  type: actionTypes.ADD_PERSON,
  id: uuid(),
  name,
  age,
  image: faker.image.avatar()
});

export const deletePerson = id => ({
  type: actionTypes.DELETE_PERSON,
  id
});
