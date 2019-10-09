import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = () =>
  axios
    .get(baseUrl)
    .then(res => res.data)

const createNew = content => {
  const object = {
    content,
    votes: 0
  }
  return axios
    .post(baseUrl, object)
    .then(res => res.data)
}

const updateVotes = (id, anecdote) =>
  axios
    .put(`${baseUrl}/${id}`, anecdote)
    .then(res => res.data)

export default {
  getAll,
  createNew,
  updateVotes
}