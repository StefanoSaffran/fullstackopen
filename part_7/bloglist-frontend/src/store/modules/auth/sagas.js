import { takeLatest, call, all, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';
import { signInSuccess, signFailure } from './actions';

export function* signIn({ payload }) {
  try {
    const { username, password } = payload;

    const response = yield call(api.post, '/api/login', {
      username,
      password,
    });

    const { token, name, username: userName } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(signInSuccess(token, { name, userName }));

    history.push('/blogs');
  } catch (error) {
    toast.error('Authentication error, verify your credentials');
    yield put(signFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, username, password } = payload;

    yield call(api.post, 'api/users', {
      name,
      username,
      password,
    });

    history.push('/');
  } catch (error) {
    toast.error('Registration failed, verify your credentials');
    yield put(signFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
