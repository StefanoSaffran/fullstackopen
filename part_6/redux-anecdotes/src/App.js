import React, { useEffect } from 'react';

import Notification from './components/Notification';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';

const App = (props) => {

  return (
    <>
      <h2>Anecdotes</h2>
      <Notification store={props.store} />
      <AnecdoteList store={props.store} />
      <AnecdoteForm store={props.store} />
    </>
  )
}

export default App