import React from 'react';

const Person = ({ person }) => {
  return (
    <div>
      {person.name} {person.number}<br />
    </div>
  );
};

const Persons = ({ personsToShow }) => {
  const rows = personsToShow.map(person => <Person key={person.name} person={person} />)
    return (
      <>
        {rows}
      </>
    );
  };

export default Persons;

