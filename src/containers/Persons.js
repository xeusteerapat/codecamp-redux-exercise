import React from 'react';
import { connect } from 'react-redux';
import { addPerson, deletePerson } from '../store/action';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

const Persons = ({ persons, addPerson, deletePerson }) => {
  return (
    <div>
      <AddPerson addPerson={addPerson} persons={persons} />
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

export default connect(mapStateToProps, { addPerson, deletePerson })(Persons);
