import React from 'react';

import AnecdoteForm from './components/AnecdoteForm';
import AnecdoteList from './components/AnecdoteList';

const App = (props) => {

  return (
    <>
      <h2>Anecdotes</h2>
      <AnecdoteList store={props.store}/>
      <AnecdoteForm store={props.store}/>
    </>
  )
}

export default App