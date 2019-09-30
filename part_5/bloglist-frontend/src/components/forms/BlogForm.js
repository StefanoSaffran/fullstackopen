import React from 'react';
import PropTypes from 'prop-types'

const BlogForm = ({ handleBlogSubmit, title, author, url, handleTitleChange, handleAuthorChange, handleUrlChange }) => {

  BlogForm.propTypes = {
    handleBlogSubmit: PropTypes.func.isRequired,
    handleTitleChange: PropTypes.func.isRequired,
    handleAuthorChange: PropTypes.func.isRequired,
    handleUrlChange: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
  }

  return (
    <form onSubmit={handleBlogSubmit}>
      <div>
        title
          <input
          type="text"
          value={title}
          name="Title"
          onChange={handleTitleChange}
        />
      </div>
      <div>
        author
          <input
          type="text"
          value={author}
          name="Author"
          onChange={handleAuthorChange}
        />
      </div>
      <div>
        url
          <input
          type="text"
          value={url}
          name="Url"
          onChange={handleUrlChange}
        />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default BlogForm;