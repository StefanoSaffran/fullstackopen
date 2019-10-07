import React from 'react';

import { addVote } from '../reducers/anecdoteReducer';
import { show, hide } from '../reducers/notificationReducer';

const AnecdoteList = props => {
  const { anecdotes } = props.store.getState();

  const vote = ({ content, id }) => {
    props.store.dispatch(
      addVote(id),
    );
    props.store.dispatch(
      show(`you voted '${content}'`)
    );

    setTimeout(() => {
      props.store.dispatch(
        hide('')
      );
    }, 5000)
  }
  
  const sortByKey = (anecdotes, key) => {

    return anecdotes.sort((a, b) => {
      let x = b[key]; let y = a[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    })
  }

  const sortedAnecdotes = sortByKey(anecdotes, 'votes');
  return (
    <>
      {sortedAnecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </>
  )
}

export default AnecdoteList;