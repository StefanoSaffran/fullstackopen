import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = () =>
  axios.get(baseUrl)
    .then(res => res.data)

const createNew = content => {
  const object = {
    content,
    votes: 0
  }
  axios.post(baseUrl, object)
    .then(res => {
      console.log(res);
      return res.data
    })
}

export default {
  getAll,
  createNew,
}