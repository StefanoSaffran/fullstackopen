import React from 'react';
import { connect } from 'react-redux'

import { addVote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = props => {

  const vote = anecdote => {
    props.addVote(anecdote);
    props.setNotification(`you voted '${anecdote.content}'`, 5);
  }
  
  return (
    <>
      {props.anecdotesToShow.map(anecdote =>
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
    anecdotesToShow: anecdotesToShow(state),
  }
}

const mapDispatchToProps = {
  addVote,
  setNotification
}

const ConnectedAnecdotes = connect(
  mapStateToProps,
  mapDispatchToProps
)(AnecdoteList)
export default ConnectedAnecdotes;