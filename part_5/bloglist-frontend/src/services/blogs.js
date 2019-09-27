import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const blogsService = {

  setToken: newToken => token = `bearer ${newToken}`,

  getAll: () =>
    axios
      .get(baseUrl)
      .then(res => res.data)

}

export default blogsService