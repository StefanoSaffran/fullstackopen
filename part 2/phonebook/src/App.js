import React, { useState } from 'react'
import './App.css';

const Person = ({ person }) => {
  return (
    <>
      {person.name} <br/>
    </>
  );
};


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newName, setNewName ] = useState('')

  const addNumber = event => {
    event.preventDefault();
    const personObject = {
      name: newName
    }
    setPersons(persons.concat(personObject));
    setNewName('');
  }

  const handleNewName = event => {
    setNewName(event.target.value)
  }

  const rows = persons.map(person => <Person key={person.name} person={person}/>);
  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addNumber}>
        <div>
          name: <input value={newName} onChange={handleNewName}/>
        </div>
        <div>
          <button type="submit" >add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <span>{rows}</span>
    </div>
  )
}

export default App