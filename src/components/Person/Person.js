import React from 'react';

import './Person.css';

const Person = ({ id, name, age, deletePerson }) => (
  <div className="Person" onClick={() => deletePerson(id)}>
    <h1>{name}</h1>
    <p>Age: {age}</p>
  </div>
);

export default Person;
