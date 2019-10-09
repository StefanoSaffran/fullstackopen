import anecdotesAPI from '../services/api';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      return state.map(anec => anec.id !== id ? anec : action.data);
    case 'NEW_ANECDOTE':
      return [...state, action.data];
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return dispatch => {
    anecdotesAPI.getAll()
      .then(anecdotes => {
        dispatch({
          type: 'INIT_ANECDOTES',
          data: anecdotes,
        })
      })
  }
}

export const addVote = anecdote => {
  return dispatch => {
    const changedAnec = {
      ...anecdote,
      votes: anecdote.votes + 1
    }
    anecdotesAPI.updateVotes(anecdote.id, changedAnec)
      .then(votedAnecdote => {
        dispatch({
          type: 'VOTE',
          data: votedAnecdote
        })
      })
  }
}

export const createAnecdote = content => {
  return dispatch => {
    anecdotesAPI.createNew(content)
      .then(newAnecdote => {
        dispatch({
          type: 'NEW_ANECDOTE',
          data: newAnecdote,
        })
      })
  }
}

export default reducer