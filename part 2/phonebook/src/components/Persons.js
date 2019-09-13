import React from 'react';

const Person = ({ person, deleteContact }) => {
  return (
    <div>
      {person.name} {person.number} <button onClick={() => deleteContact(person)}>delete</button><br />
    </div>
  );
};

const Persons = ({ personsToShow, deleteContact }) => {
  const rows = personsToShow.map(person => <Person key={person.name} person={person} deleteContact={deleteContact}/>)
    return (
      <>
        {rows}
      </>
    );
  };

export default Persons;

