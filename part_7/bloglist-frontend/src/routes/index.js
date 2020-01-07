import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Blogs from '../pages/Blogs';
import Blog from '../pages/Blogs/Blog';

import Users from '../pages/Users';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />

      <Route path="/register" component={SignUp} />

      <Route path="/blogs" exact component={Blogs} isPrivate />
      <Route path="/blogs/:id" component={Blog} isPrivate />

      <Route path="/users" component={Users} isPrivate />
    </Switch>
  );
};

export default Routes;
