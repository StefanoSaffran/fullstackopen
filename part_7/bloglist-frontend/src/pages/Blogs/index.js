import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import Loading from '~/components/Loading';
import Togglable from '~/components/Togglable';
import Blog from '~/components/BlogComponent';
import BlogForm from '~/components/BlogForm';
import { useField } from '~/helpers/hooks/useField';
import api from '~/services/api';

import { Container } from './styles';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const { reset: resetTitle, ...title } = useField('text', 'title');
  const { reset: resetAuthor, ...author } = useField('text', 'author');
  const { reset: resetUrl, ...url } = useField('text', 'url');

  const blogFormRef = React.createRef();

  const loadBlogs = async () => {
    try {
      const { data } = await api.get('/api/blogs');
      setBlogs(data);
    } catch (err) {
      toast.error(
        (err.response && err.response.data.error) ||
          'Error connecting to the server'
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadBlogs();
  }, []);

  const handleBlogSubmit = async event => {
    event.preventDefault();
    blogFormRef.current.toggleVisibility();
    const blogObject = {
      title: title.value,
      author: author.value,
      url: url.value,
    };

    try {
      const { data } = await api.post('/api/blogs', blogObject);

      setBlogs(blogs.concat(data));
      toast.success(`a new blog ${data.title} by ${data.author} added`);
    } catch (err) {
      toast.error(
        (err.response && err.response.data.error) ||
          'Error connecting to the server'
      );
    } finally {
      resetTitle();
      resetAuthor();
      resetUrl();
    }
  };

  const sortByKey = (blogsToSort, key) => {
    return blogsToSort.sort((a, b) => {
      const x = b[key];
      const y = a[key];
      return x < y ? -1 : x > y ? 1 : 0;
    });
  };

  const sortedBlogs = sortByKey(blogs, 'likes');

  return (
    <Container>
      {loading ? (
        <Loading type="spinner" />
      ) : (
        <>
          <h1>Blogs</h1>
          <h2>create new</h2>
          <Togglable buttonLabel="new note" ref={blogFormRef}>
            <BlogForm
              handleBlogSubmit={handleBlogSubmit}
              inputTitle={<input {...title} />}
              inputAuthor={<input {...author} />}
              inputUrl={<input {...url} />}
            />
          </Togglable>
          {sortedBlogs.map(blog => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </>
      )}
    </Container>
  );
}
