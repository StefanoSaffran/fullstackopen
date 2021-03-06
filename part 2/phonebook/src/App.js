import React, { useState, useEffect } from 'react'
import './App.css';

import Persons from './components/Persons';
import Filter from './components/Filter';
import PersonForm from './components/PersonForm';
import Notification from './components/Notification';
import Service from './services/personsService'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState('')
  const [infoMessage, setInfoMessage] = useState(null);

  useEffect(() => {
    Service.getAll()
      .then(allContacts => setPersons(allContacts))
      .catch(err => console.log(err))
  }, [])

  useEffect(() => {

    setTimeout(() => {
      setInfoMessage(null)
    }, 5000)

  }, [infoMessage])

  const addContact = event => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.some(p => p.name === newName)
      ? updateContact(personObject)
      : Service.addContact(personObject)
        .then(res => {
          console.log(res);
          setPersons(persons.concat(personObject))
          setInfoMessage(
            {
              body: `Added ${personObject.name}`,
              type: 'info'
            }
          )
        })
        .catch(err => {
          setInfoMessage(
            {
              body: `Information of '${personObject.name}' has already been removed from server`,
              type: 'error'
            }
          )
          console.log(err)
        })

    setNewName('');
    setNewNumber('');
  }

  const updateContact = (personObject) => {
    const result = window.confirm(`${personObject.name} is already added to phonebook, replace the old number with a new one?`);

    const id = persons.filter(p => p.name === newName).map(p => p.id);

    result
      ? Service.updateContact(id, personObject)
        .then(returnedPerson => {
          setPersons(persons.map(person => person.id !== returnedPerson.id ? person : returnedPerson))
          setInfoMessage(
            {
              body: `${personObject.name}'s number was updated`,
              type: 'info'
            }
          )
        })
        .catch(err => {
          setPersons(persons.filter(p => p.id !== personObject.id))
          setInfoMessage(
            {
              body: `Information of '${personObject.name}' has already been removed from server`,
              type: 'error'
            }
          )
          console.log(err);
        })
      : alert("The contact was not updated")
  }

  const deleteContact = person => {
    const result = window.confirm(`Delete ${person.name} ?`);

    result
      ? Service.deleteContact(person.id)
        .then(res => {
          setPersons(persons.filter(p => p.id !== person.id))
          setInfoMessage(
            {
              body: `Information of '${person.name}' has been removed from server`,
              type: 'info'
            }
          )
        })
        .catch(err => {
          setPersons(persons.filter(p => p.id !== person.id))
          setInfoMessage(
            {
              body: `Information of '${person.name}' has already been removed from server`,
              type: 'error'
            }
          )
          console.log(err);
        })
      : alert("The contact was not deleted")

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
      <Notification message={infoMessage} />
      <Filter handleFilter={handleFilter} />
      <h2>add a new</h2>
      <PersonForm name={newName} number={newNumber} handleNewName={handleNewName} handleNewNumber={handleNewNumber} addContact={addContact} />
      <h2>Numbers</h2>
      <Persons personsToShow={personsToShow} deleteContact={deleteContact} />
    </div>
  )
}

export default App