import React from 'react';

import { createAnecdote } from '../reducers/anecdoteReducer';
import { show } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const addAnecdote = event => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    props.store.dispatch(
      createAnecdote(content),
      show('New Anecdote added.')
    );
  }

  return (
    <>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote" /></div>
        <button type="submit">create</button>
      </form>
    </>
  )
}

export default AnecdoteForm;