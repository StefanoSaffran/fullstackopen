import React from 'react';
import PropTypes from 'prop-types'

const BlogForm = ({ handleBlogSubmit, inputTitle, inputAuthor, inputUrl, }) => {

  BlogForm.propTypes = {
    handleBlogSubmit: PropTypes.func.isRequired
  }

  return (
    <form onSubmit={handleBlogSubmit}>
      <div>
        title
        {inputTitle}
      </div>
      <div>
        author
        {inputAuthor}
      </div>
      <div>
        url
        {inputUrl}
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default BlogForm;