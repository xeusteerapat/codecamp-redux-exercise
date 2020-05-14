import React from 'react';
import { connect } from 'react-redux';
import { addPersonAsync, deletePerson } from '../store/action';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

const Persons = ({ persons, addPersonAsync, deletePerson }) => {
  return (
    <div>
      <AddPerson addPerson={addPersonAsync} persons={persons} />
      {persons.map(person => (
        <Person
          id={person.id}
          key={person.id}
          name={person.name}
          age={person.age}
          deletePerson={deletePerson}
          image={person.image}
        />
      ))}
    </div>
  );
};

const mapStateToProps = state => ({
  persons: state.persons
});

export default connect(mapStateToProps, { addPersonAsync, deletePerson })(
  Persons
);
