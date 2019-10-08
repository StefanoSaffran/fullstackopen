import anecdotesAPI from '../services/api';

const reducer = (state = [], action) => {
  switch (action.type) {
    case 'INIT_ANECDOTES':
      return action.data
    case 'VOTE':
      const id = action.data.id
      const anecToChange = state.find(anec => anec.id === id)
      const changedAnec = {
        ...anecToChange,
        votes: anecToChange.votes + 1
      }
      return state.map(anec => anec.id !== id ? anec : changedAnec);
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

export const addVote = id => {
  return {
    type: 'VOTE',
    data: {
      id
    }
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


/* const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
} */