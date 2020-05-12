import React from 'react';

import './Person.css';

const Person = ({ id, name, age, image, deletePerson }) => (
  <div className="Person" onClick={() => deletePerson(id)}>
    <h1>{name}</h1>
    <p>Age: {age}</p>
    <img src={image} alt="" />
  </div>
);

export default Person;
