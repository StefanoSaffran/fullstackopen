import React from 'react';

import Notification from './components/Notification';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Filter from './components/Filter';

const App = (props) => {

  return (
    <>
      <h2>Anecdotes</h2>
      <Filter store={props.store} />
      <Notification store={props.store} />
      <AnecdoteList store={props.store} />
      <AnecdoteForm store={props.store} />
    </>
  )
}

export default App