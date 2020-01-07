import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { toast } from 'react-toastify';

import Loading from '~/components/Loading';
import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Blog() {
  const user = useSelector(state => state.user.profile);
  const { id } = useParams();
  const [blog, setBlog] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBlog = async () => {
    try {
      const { data } = await api.get(`/api/blogs/${id}`);
      setBlog(data);
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
    loadBlog();
  }, []); //eslint-disable-line

  const handleLikes = async () => {
    const blogToUpdate = {
      user: blog.user.id,
      likes: (blog.likes += 1),
      author: blog.author,
      title: blog.title,
      url: blog.url,
    };

    try {
      const { data } = await api.put(`/api/blogs/${id}`, blogToUpdate);

      setBlog({
        ...data,
        user: {
          username: blog.user.username,
          name: blog.user.name,
          id: blog.user.id,
        },
      });
      toast.success(`${user.name} liked the blog post ${data.title}`);
    } catch (err) {
      toast.error(
        (err.response && err.response.data.error) ||
          'Error trying to like the blog'
      );
    }
  };

  const handleDelete = async () => {
    const result = window.confirm(
      `remove blog ${blog.title} by ${blog.author} ?`
    );

    if (result) {
      try {
        await api.delete(`/api/blogs/${id}`);

        toast.success('the blog has been removed from server');
        history.push('/blogs');
      } catch (err) {
        toast.error(
          (err.response && err.response.data.error) ||
            'Error trying to delete the blog'
        );
      }
    }
  };
  return (
    <Container>
      {loading ? (
        <Loading type="spinner" />
      ) : (
        <div>
          <h1>
            {blog.title} {blog.author} <br />
          </h1>
          <a href={blog.url}>{blog.url}</a> <br />
          <div>
            <p>{blog.likes} likes</p>
            <button type="button" onClick={() => handleLikes(blog)}>
              like
            </button>
          </div>
          added by {blog.user.name || user.name} <br />
          {blog.user.name === user.name && (
            <button type="button" onClick={() => handleDelete(blog)}>
              remove
            </button>
          )}
        </div>
      )}
    </Container>
  );
}

Blog.propTypes = {};
