import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signInRequest } from '~/store/modules/auth/actions';

import Loading from '~/components/Loading';

import logo from '~/assets/react.svg';

export default function SignIn() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signInRequest(username, password));
  };

  return (
    <>
      <img src={logo} alt="app logo" />

      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Enter username"
          onChange={({ target }) => setUsername(target.value)}
        />
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          onChange={({ target }) => setPassword(target.value)}
        />

        <button type="submit">{loading ? <Loading /> : 'Login'}</button>
        <Link to="/register">Create free account</Link>
      </form>
    </>
  );
}
