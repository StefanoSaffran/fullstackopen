import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { signUpRequest } from '~/store/modules/auth/actions';

import Loading from '~/components/Loading';

import logo from '~/assets/react.svg';

export default function SignUp() {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const handleSubmit = ({ name, email, password }) => {
    dispatch(signUpRequest(name, email, password));
  };

  return (
    <>
      <img src={logo} alt="app logo" />

      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Full name" />
        <input name="username" placeholder="Enter username" />
        <input name="password" type="password" placeholder="Enter password" />

        <button type="submit">
          {loading ? <Loading /> : 'Create account'}
        </button>
        <Link to="/">I already have an account</Link>
      </form>
    </>
  );
}
