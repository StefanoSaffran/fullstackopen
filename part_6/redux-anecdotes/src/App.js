import React from 'react';

import Notification from './components/Notification';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Filter from './components/Filter';

const App = () => {

  return (
    <>
      <h2>Anecdotes</h2>
      <Filter  />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </>
  )
}

export default App