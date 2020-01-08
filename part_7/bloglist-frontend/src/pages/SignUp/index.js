import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUpRequest } from '~/store/modules/auth/actions';

import Loading from '~/components/Loading';

import logo from '~/assets/react.svg';

export default function SignUp() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(signUpRequest(name, username, password));
  };

  return (
    <>
      <img src={logo} alt="app logo" />

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Full name"
          onChange={({ target }) => setName(target.value)}
        />
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

        <button type="submit">
          {loading ? <Loading /> : 'Create account'}
        </button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
