import React from 'react';
import PropTypes from 'prop-types';

import { Form, Label } from './styles';

const BlogForm = ({ handleBlogSubmit, inputTitle, inputAuthor, inputUrl }) => {
  return (
    <Form onSubmit={handleBlogSubmit}>
      <div>
        <Label htmlFor="title">
          title
          {inputTitle}
        </Label>
      </div>
      <div>
        <Label htmlFor="author">
          author
          {inputAuthor}
        </Label>
      </div>
      <div>
        <Label htmlFor="url">
          url
          {inputUrl}
        </Label>
      </div>
      <button type="submit">create</button>
    </Form>
  );
};

BlogForm.propTypes = {
  handleBlogSubmit: PropTypes.func.isRequired,
  inputTitle: PropTypes.element.isRequired,
  inputAuthor: PropTypes.element.isRequired,
  inputUrl: PropTypes.element.isRequired,
};

export default BlogForm;
