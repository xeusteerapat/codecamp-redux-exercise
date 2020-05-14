import React from 'react';

import './AddPerson.css';

const AddPerson = ({ addPerson }) => {
  let nameInput;
  let ageInput;

  const handleNameChange = ele => {
    nameInput = ele;
  };

  const handleAgeChange = ele => {
    ageInput = ele;
  };
  return (
    <div className="AddPerson">
      <form
        onSubmit={e => {
          e.preventDefault();
          addPerson(nameInput.value, ageInput.value);
          nameInput.value = '';
          ageInput.value = undefined;
        }}
      >
        <input type="text" ref={handleNameChange} />
        <input type="number" ref={handleAgeChange} />
        <button>Add Person</button>
      </form>
    </div>
  );
};

export default AddPerson;
