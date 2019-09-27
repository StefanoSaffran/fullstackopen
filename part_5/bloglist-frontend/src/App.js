import React, { useState, useEffect } from 'react';
import './App.css';

import Notification from './components/Notification';
import Blog from './components/Blog';
import BlogForm from './components/forms/BlogForm'
import blogsService from './services/blogs';
import loginService from './services/login';
import { async } from 'q';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [infoMessage, setInfoMessage] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [newBlog, setNewBlog] = useState([])

  useEffect(() => {

    blogsService.getAll()
      .then(allBlogs => setBlogs(allBlogs))
      .catch(err => console.log(err.response.data))

  }, [])

  useEffect(() => {

    setTimeout(() => {
      setInfoMessage(null)
    }, 5000)

  }, [infoMessage])

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem('loggedBlogappUser')
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON)
      setUser(user)
      blogsService.setToken(user.token)
    }
  }, [])

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })

      window.localStorage.setItem(
        'loggedBlogappUser', JSON.stringify(user)
      )
      blogsService.setToken(user.token)
      setUser(user);
      setUsername('');
      setPassword('');

    } catch (err) {
      setInfoMessage(
        {
          body: 'wrong username or password',
          type: 'error'
        }
      )
    }
  }

  const addBlog = async (title, author, url) => {

    const blogObject = {
      title,
      author,
      url
    }

    setNewBlog(blogObject);
    try {
      const savedBlog = await blogsService.addBlog(blogObject)

      setBlogs(blogs.concat(savedBlog))
      setInfoMessage(
        {
          body: `a new blog ${newBlog.title} by ${newBlog.author} added`,
          type: 'info'
        }
      )
    } catch (err) {
      setInfoMessage(
        {
          body: `${err.response.data.error}`,
          type: 'error'
        }
      )
      console.log(err.response.data)
    }

  }

  const LoginForm = () => (
    <>
      <form onSubmit={handleLogin}>
        <div>
          username
          <input
            type="text"
            value={username}
            name="Username"
            onChange={({ target }) => setUsername(target.value)}
          />
        </div>
        <div>
          password
          <input
            type="password"
            value={password}
            name="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
        </div>
        <button type="submit">login</button>
      </form>
    </>
  )

  const logout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
    blogsService.setToken('')
  }

  const rows = blogs.map(blog => <Blog key={blog.id} blog={blog} />);

  if (user === null) {

    return (
      <>
        <h2>log in to application</h2>
        <Notification message={infoMessage} />
        <LoginForm />
      </>
    )

  }

  return (
    <>
      <h1>Blogs</h1>
      <Notification message={infoMessage} />
      <div>
        {user.name} logged in <button onClick={logout}>Logout</button>
      </div>
      <h2>create new</h2>
      <div>
        <BlogForm addBlog={addBlog} />
        {rows}
      </div>
    </>
  );
}

export default App;
