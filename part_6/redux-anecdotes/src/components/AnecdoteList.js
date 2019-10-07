import React from 'react';
import { connect } from 'react-redux'

import { addVote } from '../reducers/anecdoteReducer';
import { show, hide } from '../reducers/notificationReducer';

const AnecdoteList = props => {

  const vote = ({ content, id }) => {
    props.addVote(id);
    props.show(`you voted '${content}'`);
    setTimeout(() => {
      props.hide('');
    }, 5000)
  }
  
  return (
    <>
      {props.filteredAnecdotes.map(anecdote =>
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

const sortByKey = (anecdotes, key) => {

  return anecdotes.sort((a, b) => {
    let x = b[key]; let y = a[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  })
}

const anecdotesToShow = ({ anecdotes, filter }) => {
  const sortedAnecdotes = sortByKey(anecdotes, 'votes');

  return filter
  ? sortedAnecdotes.filter(anecdote => {
    let regex = new RegExp(filter, 'i')
    return regex.test(anecdote.content)
  })
  : sortedAnecdotes;

}
const mapStateToProps = (state) => {
  return {
    filteredAnecdotes: anecdotesToShow(state),
  }
}

const mapDispatchToProps = {
  addVote,
  show,
  hide
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdotes;