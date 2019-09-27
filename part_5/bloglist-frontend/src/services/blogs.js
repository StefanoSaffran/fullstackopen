import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const blogsService = {

  setToken: newToken => token = `bearer ${newToken}`,

  getAll: () =>
    axios
      .get(baseUrl)
      .then(res => res.data)
  ,
  
  addBlog: async newBlog => {

    const config = {
      headers: { Authorization: token }
    }
    const response =
      await axios
        .post(baseUrl, newBlog, config)
        return response.data
  }

}

export default blogsService