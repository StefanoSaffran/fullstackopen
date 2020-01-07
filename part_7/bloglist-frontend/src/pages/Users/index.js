import React, { useState, useEffect } from 'react';

import { toast } from 'react-toastify';

import Loading from '~/components/Loading';
import api from '~/services/api';

import { Container, Table, THead, TBody } from './styles';

export default function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBlogs = async () => {
    try {
      const { data } = await api.get('/api/users');
      console.tron.log(data);
      setUsers(data);
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

  return (
    <Container>
      {loading ? (
        <Loading type="spinner" />
      ) : (
        <>
          <h1>Users</h1>
          <Table>
            <THead>
              <tr>
                <th />
                <th>blogs created</th>
              </tr>
            </THead>
            <TBody>
              {users.map(user => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.blogs.length}</td>
                </tr>
              ))}
            </TBody>
          </Table>
        </>
      )}
    </Container>
  );
}
