import React, { useState, useEffect } from 'react';
import './App.css';

import Notification from './components/Notification';
import Blog from './components/Blog';
import BlogForm from './components/forms/BlogForm'
import LoginForm from './components/forms/LoginForm'
import Togglable from './components/Togglable';
import blogsService from './services/blogs';
import loginService from './services/login';

const App = () => {
  const [blogs, setBlogs] = useState([]);
  const [infoMessage, setInfoMessage] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [url, setUrl] = useState('');

  const blogFormRef = React.createRef();

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

  const handleBlogSubmit = async event => {
    event.preventDefault();
    blogFormRef.current.toggleVisibility();
    const blogObject = {
      title,
      author,
      url
    }

    try {
      const savedBlog = await blogsService.addBlog(blogObject)

      setBlogs(blogs.concat(savedBlog))
      setInfoMessage(
        {
          body: `a new blog ${savedBlog.title} by ${savedBlog.author} added`,
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

  const handleLikes = blog => {

    const blogToUpdate = { 
      user: blog.user.id,
      likes: (blog.likes += 1),
      author: blog.author,
      title: blog.title,
      url: blog.url
    }

    blogsService.updateBlog(blog.id, blogToUpdate)
        .then(updatedBlog => {
          setBlogs(blogs.map(blog => blog.id !== updatedBlog.id ? blog : updatedBlog))
          setInfoMessage(
            {
              body: `${user.name} liked the blog post ${updatedBlog.title}`,
              type: 'info'
            }
          )
        })
        .catch(err => {
          setInfoMessage(
            {
              body: `${err.response.data.error}`,
              type: 'error'
            }
          )
          console.log(err.response.data)
        })
  }

  const loginForm = () => {

    return (
      <Togglable buttonLabel='login'>
        <LoginForm
          username={username}
          password={password}
          handleUsernameChange={({ target }) => setUsername(target.value)}
          handlePasswordChange={({ target }) => setPassword(target.value)}
          handleSubmit={handleLogin}
        />
      </Togglable>
    )
  }

  const logout = () => {
    window.localStorage.removeItem('loggedBlogappUser')
    setUser(null)
    blogsService.setToken('')
  }
  
  const sortByKey = (blogs, key) => {
    
    return blogs.sort((a,b) => {
      let x = b[key]; let y = a[key];
      return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    })
  }
 
  const sortedblogs = sortByKey(blogs, 'likes'); 

  const rows = sortedblogs.map(blog => <Blog key={blog.id} blog={blog} handleLikes={handleLikes} />);

  if (user === null) {

    return (
      <>
        <h2>log in to application</h2>
        <Notification message={infoMessage} />
        {loginForm()}
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
      <Togglable buttonLabel='new note' ref={blogFormRef}>
        <BlogForm
          handleBlogSubmit={handleBlogSubmit}
          title={title}
          author={author}
          url={url}
          handleTitleChange={({ target }) => setTitle(target.value)}
          handleAuthorChange={({ target }) => setAuthor(target.value)}
          handleUrlChange={({ target }) => setUrl(target.value)}
        />
      </Togglable>
      {rows}
    </>
  );
}

export default App;
