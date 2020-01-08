import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { toast } from 'react-toastify';

import Loading from '~/components/Loading';
import api from '~/services/api';

import { Container } from './styles';

export default function User() {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadUser = async () => {
    try {
      const { data } = await api.get(`/api/Users/${id}`);
      setUser(data);
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
    loadUser();
  }, []); //eslint-disable-line

  return (
    <Container>
      {loading ? (
        <Loading type="spinner" />
      ) : (
        <>
          <h1>{user.name}</h1>
          <h3>added blogs</h3>
          <ul>
            {user.blogs.map(blog => (
              <li key={blog.id}>{blog.title}</li>
            ))}
          </ul>
          <Link to="/users">Back to Users</Link>
        </>
      )}
    </Container>
  );
}
