import React from 'react';
import { connect } from 'react-redux'

import { createAnecdote } from '../reducers/anecdoteReducer';
import { show, hide } from '../reducers/notificationReducer';
import anecdotesAPI from '../services/api';

const AnecdoteForm = (props) => {

  const addAnecdote = event => {
    event.preventDefault();

    const content = event.target.anecdote.value
    event.target.anecdote.value = '';

    anecdotesAPI.createNew(content)
      .then(newAnecdote => {
        props.createAnecdote(newAnecdote)
        props.show('New Anecdote added.');
        setTimeout(() => {
          props.hide('');
        }, 5000)
      })
    
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

const mapDispatchToProps = {
  createAnecdote,
  show,
  hide
}

export default connect(
  null,
  mapDispatchToProps
)(AnecdoteForm);