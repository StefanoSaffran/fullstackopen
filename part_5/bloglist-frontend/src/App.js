import React, { useState, useEffect } from 'react';
import './App.css';

import Notification from './components/Notification';
import Blog from './components/Blog';
import blogsService from './services/blogs';
import loginService from './services/login';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [infoMessage, setInfoMessage] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

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

  const handleLogin = async event => {
    event.preventDefault()

    try {
      const user = await loginService.login({
        username, password,
      })

      setUser(user);
      setUsername('');
      setPassword('');

    } catch (err) {
      setInfoMessage(
        {
          body: 'Wrong credentials',
          type: 'error'
        }
      )
    }
  }

  const loginForm = () => (
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
  )

  const rows = blogs.map(blog => <Blog key={blog.title} blog={blog} />);
  return (
    <>
      <h1>Blogs</h1>
      <Notification message={infoMessage} />
      <h2>Login</h2>

      {user === null ?
        loginForm() :
        <div>
          <p>{user.name} logged in</p>
          {rows}
        </div>
      }
    </>
  );
}

export default App;
