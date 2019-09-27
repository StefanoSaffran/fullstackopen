import axios from 'axios'
const baseUrl = '/api/blogs'

const blogsService = {

  getAll: () =>
    axios
      .get(baseUrl)
      .then(res => res.data)

}

export default blogsService