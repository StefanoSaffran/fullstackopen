import React, { useState } from 'react';

const BlogForm = ({ addBlog }) => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [url, setUrl] = useState('');

    const saveBlog = event => {
        event.preventDefault();
        setTitle('');
        setAuthor('');
        setUrl('');
        addBlog(title, author, url);
    }
  return (
    <form onSubmit={saveBlog}>
      <div>
        title
          <input
          type="text"
          value={title}
          name="Title"
          onChange={({ target }) => setTitle(target.value)}
        />
      </div>
      <div>
        author
          <input
          type="text"
          value={author}
          name="Author"
          onChange={({ target }) => setAuthor(target.value)}
        />
      </div>
      <div>
        url
          <input
          type="text"
          value={url}
          name="Url"
          onChange={({ target }) => setUrl(target.value)}
        />
      </div>
      <button type="submit">create</button>
    </form>
  );
};

export default BlogForm;