import React, { useState, useEffect } from 'react'
import './App.css';

import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Service from './services/personsService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')

  useEffect(() => {
    Service.getAll()
      .then(allContacts => setPersons(allContacts))
      .catch(err => console.log(err))
  })

  const addContact = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.some(p => p.name === newName)
      ? alert(`${newName} is already added to phonebook`)
      : Service.addContact(personObject)
          .then(setPersons(persons.concat(personObject)))
          .catch(err => console.log(err))

    setNewName('');
    setNewNumber('');
  }

  const handleNewName = event => {
    setNewName(event.target.value)
  }

  const handleNewNumber = event => {
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    setFilter(event.target.value);

  }

  const personsToShow = filter
    ? persons.filter(person => {
      let regex = new RegExp(filter, "i")
      return regex.test(person.name);
    })
    : persons;

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter handleFilter={handleFilter}/>
      <h2>add a new</h2>
      <PersonForm name={newName} number={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} addContact={addContact}/>
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow}/>
    </div>
  )
}

export default App