import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Notification from './components/Notification';
import AnecdoteList from './components/AnecdoteList';
import AnecdoteForm from './components/AnecdoteForm';
import Filter from './components/Filter';
import anecdotesAPI from './services/api';
import { initializeAnecdotes } from './reducers/anecdoteReducer';

const App = (props) => {

  useEffect(() => {
    anecdotesAPI
      .getAll()
      .then(anecdotes => 
        props.initializeAnecdotes(anecdotes)
      )
  }, []);

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

export default connect(
  null,
  { initializeAnecdotes }
)(App)