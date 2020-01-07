import React from 'react';
import { ToastContainer } from 'react-toastify';
import { PersistGate } from 'redux-persist/integration/react';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';

import Routes from './routes';
import history from './services/history';

import { store, persistor } from './store';

import GlobalStyle from './styles/global';

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Router history={history}>
          <Routes />
          <GlobalStyle />
          <ToastContainer autoClose={3500} />
        </Router>
      </PersistGate>
    </Provider>
  );
}

export default App;


  /* const blogFormRef = React.createRef();

  const handleBlogSubmit = async event => {
    event.preventDefault();
    blogFormRef.current.toggleVisibility();
    const blogObject = {
      title: title.value,
      author: author.value,
      url: url.value
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
      resetTitle()
      resetAuthor()
      resetUrl()
    } catch (err) {
      setInfoMessage(
        {
          body: `${err.response.data.error}`,
          type: 'error'
        }
      )
      resetTitle()
      resetAuthor()
      resetUrl()
      console.log(err.response.data)
    }

  } */
