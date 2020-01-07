import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { Container } from './styles';

const Blog = ({ blog }) => {
  return (
    <Container>
      <Link to={`/blogs/${blog.id}`}>
        {blog.title} {blog.author}
      </Link>
    </Container>
  );
};

Blog.propTypes = {
  blog: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default Blog;
