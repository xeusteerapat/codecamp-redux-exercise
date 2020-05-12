import React from 'react';

import './AddPerson.css';

const AddPerson = ({ addPerson }) => (
  <div className="AddPerson">
    <button onClick={addPerson}>Add Person</button>
  </div>
);

export default AddPerson;
