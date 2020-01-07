import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import Loading from '~/components/Loading';
import Blog from '~/components/BlogComponent';
import api from '~/services/api';

import { Container } from './styles';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

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
          {sortedBlogs.map(blog => (
            <Blog key={blog.id} blog={blog} />
          ))}
        </>
      )}
    </Container>
  );
}
